using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using AutoMapper;
using MezabElRahma.API.Infrastructure;
using MezabElRahma.API.Models;
using MezabElRahma.BLL.DTOs;
using MezabElRahma.BLL.Services.Interfaces;

namespace MezabElRahma.API.Controllers
{
    public class AboutUssController : BaseApiController
    {
        private IAboutUsFacade _aboutUsFacade;
        private IPackageFacade _packageFacade;

        public AboutUssController(IAboutUsFacade aboutUsFacade, IPackageFacade packageFacade)
        {
            _aboutUsFacade = aboutUsFacade;
            _packageFacade = packageFacade;
        }

        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/AboutUsesPaging", Name = "GetAllPagingAboutUses")]
        [HttpGet]
        [ResponseType(typeof(IEnumerable<AboutUsModel>))]
        public IHttpActionResult GetAllPagingAboutUses(int page = Page, int pagesize = PageSize)
        {
            var aboutUses = _aboutUsFacade.GetAllPagingAboutUsesForLoggedUser(UserId, page, pagesize);
            var data = Mapper.Map<List<AboutUsModel>>(aboutUses.Data);

            return PagedResponse("GetAllPagingAboutUses", page, pagesize, aboutUses.TotalCount, data, true);
        }

        [Route("api/AboutUs", Name = "GetAboutUs")]
        [HttpGet]
        [ResponseType(typeof(IEnumerable<AboutUsModel>))]
        public IHttpActionResult GetAboutUs()
        {
            var aboutUs = Mapper.Map<AboutUsModel>(_aboutUsFacade.GetAboutUs());
            return Ok(aboutUs);
        }


        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/AboutUses", Name = "AddAboutUs")]
        [HttpPost]
        public IHttpActionResult AddAboutUs([FromBody] AboutUsModel aboutUsModel)
        {
            _aboutUsFacade.AddAboutUs(Mapper.Map<AboutUsDTO>(aboutUsModel), UserId);
            return Ok();
        }

        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/AboutUses", Name = "UpdateAboutUs")]
        [HttpPut]
        public IHttpActionResult UpdateAboutUs([FromBody] AboutUsModel aboutUsModel)
        {
            _aboutUsFacade.UpdateAboutUs(UserId, Mapper.Map<AboutUsDTO>(aboutUsModel));
            return Ok();
        }

        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/AboutUses/{aboutUsId:long}", Name = "DeleteAboutUs")]
        [HttpDelete]
        public IHttpActionResult DeleteAboutUs(long homeId)
        {
            _aboutUsFacade.DeleteAboutUs(homeId);
            return Ok();
        }
    }
}
