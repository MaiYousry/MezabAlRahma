using MezabElRahma.API.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using AutoMapper;
using MezabElRahma.API.Models;
using MezabElRahma.BLL.DTOs;
using MezabElRahma.BLL.Services.Interfaces;

namespace MezabElRahma.API.Controllers
{
    public class ContactUssController : BaseApiController
    {
        private IContactUsFacade _contactUsFacade;

        public ContactUssController(IContactUsFacade contactUsFacade)
        {
            _contactUsFacade = contactUsFacade;
        }
        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/ContactUss", Name = "GetContactUs")]
        [HttpGet]
        [ResponseType(typeof(ContactUsModel))]
        public IHttpActionResult GetContactUs()
        {
            var contactUs = Mapper.Map<ContactUsModel>(_contactUsFacade.GetContactUsForLoggedUser(UserId));
            return Ok(contactUs);
        }

        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/ContactUs", Name = "GetContact")]
        [HttpGet]
        [ResponseType(typeof(ContactUsModel))]
        public IHttpActionResult GetContact()
        {
            var contactUs = Mapper.Map<ContactUsModel>(_contactUsFacade.GetContactUs());
            return Ok(contactUs);
        }

        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/ContactUss", Name = "AddContactUs")]
        [HttpPost]
        public IHttpActionResult AddContactUs([FromBody] ContactUsModel contactUsModel)
        {
            _contactUsFacade.AddContactUs(Mapper.Map<ContactUsDTO>(contactUsModel), UserId);
            return Ok();
        }

        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/ContactUss", Name = "UpdateContactUs")]
        [HttpPut]
        public IHttpActionResult UpdateContactUs([FromBody] ContactUsModel contactUsModel)
        {
            _contactUsFacade.UpdateContactUs(UserId, Mapper.Map<ContactUsDTO>(contactUsModel));
            return Ok();
        }

    }
}
