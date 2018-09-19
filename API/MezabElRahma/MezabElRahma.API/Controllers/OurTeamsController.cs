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
using MezabElRahma.API.Providers;
using MezabElRahma.BLL.DTOs;
using MezabElRahma.BLL.Services.Interfaces;
using MezabElRahma.Common;

namespace MezabElRahma.API.Controllers
{
    public class OurTeamsController : BaseApiController
    {
        private IOurTeamFacade _ourTeamFacade;
        private IPackageFacade _packageFacade;

        public OurTeamsController(IOurTeamFacade ourTeamFacade, IPackageFacade packageFacade)
        {
            _ourTeamFacade = ourTeamFacade;
            _packageFacade = packageFacade;
        }

        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/OurTeamsPaging", Name = "GetAllPagingOurTeams")]
        [HttpGet]
        [ResponseType(typeof(IEnumerable<OurTeamModel>))]
        public IHttpActionResult GetAllPagingOurTeams(int page = Page, int pagesize = PageSize)
        {
            var ourTeams = _ourTeamFacade.GetAllPagingOurTeamsForLoggedUser(UserId, page, pagesize);
            var data = Mapper.Map<List<OurTeamModel>>(ourTeams.Data);

            return PagedResponse("GetAllPagingOurTeams", page, pagesize, ourTeams.TotalCount, data, true);
        }


        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/OurTeams", Name = "GetOurTeam")]
        [HttpGet]
        [ResponseType(typeof(OurTeamModel))]
        public IHttpActionResult GetOurTeam()
        {
            var ourTeam = Mapper.Map<List<OurTeamModel>>(_ourTeamFacade.GetOurTeam());
            return Ok(ourTeam);
        }

        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/OurTeams", Name = "AddOurTeam")]
        [HttpPost]
        public IHttpActionResult AddOurTeam([FromBody] OurTeamModel ourTeamModel)
        {
            _ourTeamFacade.AddOurTeam(Mapper.Map<OurTeamDTO>(ourTeamModel), UserId);
            return Ok();
        }

        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/OurTeams", Name = "UpdateOurTeam")]
        [HttpPut]
        public IHttpActionResult UpdateOurTeam([FromBody] OurTeamModel ourTeamModel)
        {
            _ourTeamFacade.UpdateOurTeam(UserId, Mapper.Map<OurTeamDTO>(ourTeamModel));
            return Ok();
        }

        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/OurTeams/{ourTeamId:long}", Name = "DeleteOurTeam")]
        [HttpDelete]
        public IHttpActionResult DeleteOurTeam(long ourTeamId)
        {
            _ourTeamFacade.DeleteOurTeam(ourTeamId);
            return Ok();
        }
    }
}

