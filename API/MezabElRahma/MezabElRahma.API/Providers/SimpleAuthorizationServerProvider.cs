﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using MezabElRahma.BLL.Services.Interfaces;
using MezabElRahma.Common;
using MezabElRahma.Common.CustomException;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.OAuth;
using Microsoft.Practices.Unity;
using Unity;
using Unity.Interception.Utilities;
using ValidationException = System.ComponentModel.DataAnnotations.ValidationException;
using MezabElRahma.BLL.DTOs;

namespace MezabElRahma.API.Providers
{
    public class SimpleAuthorizationServerProvider: OAuthAuthorizationServerProvider
    {
        public override  Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();

            return Task.FromResult<object>(null);
        }

        public override Task TokenEndpoint(OAuthTokenEndpointContext context)
        {
            foreach (KeyValuePair<string, string> property in context.Properties.Dictionary)
            {
                context.AdditionalResponseParameters.Add(property.Key, property.Value);
            }

            return Task.FromResult<object>(null);
        }
        public override Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {

            context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { "*" });


            var container = (IUnityContainer)GlobalConfiguration.Configuration.DependencyResolver.GetService(typeof(IUnityContainer));

            var userFacade = container.Resolve<IUserFacade>();

            // validate user credentials from the DB
            UserDTO user = null;
            try
            {
                user = userFacade.ValidateUser(context.UserName, context.Password);

            }
            catch (ValidationException exception)
            {
                user = new UserDTO();

            }
            catch (Exception e)
            {
                user = new UserDTO();
            }
            
            if (user == null)
            {
                context.SetError("invalid grant", "The user name or password is incorrect.");
                //Add your flag to the header of the response
                context.Response.Headers.Add("X-Challenge",
                    new[] { ((int)HttpStatusCode.Unauthorized).ToString() });
                return Task.FromResult<object>(null);
            }
            if (user.UserIsDeleted)
            {
                context.SetError("inactive user", "The user is deleted.");
                //Add your flag to the header of the response
                context.Response.Headers.Add("X-Challenge",
                    new[] { ((int)HttpStatusCode.Unauthorized).ToString() });
                return Task.FromResult<object>(null);
            }

            var ticket = GetAuthenticationTicket(user);
            context.Validated(ticket);
            
            return Task.FromResult<object>(null);
        }
        public override Task GrantRefreshToken(OAuthGrantRefreshTokenContext context)
        {
            var newIdentity = new ClaimsIdentity(context.Ticket.Identity);

            var newClaim = newIdentity.Claims.FirstOrDefault(c => c.Type == "UserId");
            if (newClaim != null)
            {
                // reset existing claims collection
                newIdentity.Claims.ForEach(s => newIdentity.RemoveClaim(s));
                var container = (IUnityContainer)GlobalConfiguration.Configuration.DependencyResolver.GetService(typeof(IUnityContainer));
                var userFacade = container.Resolve<IUserFacade>();

                UserDTO user = userFacade.GetUser(long.Parse(newClaim.Value));
                if (user == null)
                {
                    context.SetError("Invalid grant", "The user name or password is incorrect");
                    //Add your flag to the header of the response
                    context.Response.Headers.Add("X-Challenge",
                        new[] { ((int)HttpStatusCode.Unauthorized).ToString() });
                    return Task.FromResult<object>(null);
                }
                if (user.UserIsDeleted)
                {
                    context.SetError("inactive user", "The user is deleted.");
                    //Add your flag to the header of the response
                    context.Response.Headers.Add("X-Challenge",
                        new[] { ((int)HttpStatusCode.Unauthorized).ToString() });
                    return Task.FromResult<object>(null);
                }
                var newTicket = GetAuthenticationTicket(user);
                context.Validated(newTicket);

            }

            return Task.FromResult<object>(null);
        }

        private AuthenticationTicket GetAuthenticationTicket(UserDTO user)
        {
            var identity = new ClaimsIdentity(Strings.JWT);
            identity.AddClaim(new Claim(Strings.userName, user.UserName));
            identity.AddClaim(new Claim(Strings.userId, user.UserId.ToString()));
            identity.AddClaim(new Claim(Strings.name, user.Name));
            //identity.AddClaim(new Claim(ClaimTypes.Role, user.UserRoleType.ToString()));

            var props = new AuthenticationProperties(AuthProps(user));

            var ticket = new AuthenticationTicket(identity, props);
            return ticket;
        }
        private Dictionary<string, string> AuthProps(UserDTO user)
        {
            return new Dictionary<string, string>
            {
                {
                    "UserId", user.UserId.ToString()
                },
                {
                    "Username", user.UserName
               
                },
                {
                    "Name", user.Name

                },
                {
                    "Role", user.UserRoleType.ToString()
                }
            };
        }
    }
}