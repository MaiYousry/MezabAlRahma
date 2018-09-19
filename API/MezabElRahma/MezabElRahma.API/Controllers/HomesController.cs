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
    public class HomesController : BaseApiController
    {
        private IHomeFacade _homeFacade;
        private IPackageFacade _packageFacade;

        public HomesController(IHomeFacade homeFacade, IPackageFacade packageFacade)
        {
            _homeFacade = homeFacade;
            _packageFacade = packageFacade;
        }

        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/HomesPaging", Name = "GetAllPagingHomes")]
        [HttpGet]
        [ResponseType(typeof(IEnumerable<HomeModel>))]
        public IHttpActionResult GetAllPagingHomes(int page = Page, int pagesize = PageSize)
        {
            var homes = _homeFacade.GetAllPagingHomesForLoggedUser(UserId, page, pagesize);
            var data = Mapper.Map<List<HomeModel>>(homes.Data);

            return PagedResponse("GetAllPagingHomes", page, pagesize, homes.TotalCount, data, true);
        }

        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/Home", Name = "GetHome")]
        [HttpGet]
        [ResponseType(typeof(HomeModel))]
        public IHttpActionResult GetHome()
        {
            var home = Mapper.Map<HomeModel>(_homeFacade.GetHome());
            return Ok(home);
        }

        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/Homes", Name = "AddHome")]
        [HttpPost]
        public IHttpActionResult AddHome([FromBody] HomeModel homeModel)
        {
            _homeFacade.AddHome(Mapper.Map<HomeDTO>(homeModel), UserId);
            return Ok();
        }

        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/Homes", Name = "UpdateHome")]
        [HttpPut]
        public IHttpActionResult UpdateHome([FromBody] HomeModel homeModel)
        {
            _homeFacade.UpdateHome(UserId, Mapper.Map<HomeDTO>(homeModel));
            return Ok();
        }

        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/Homes/{homeId:long}", Name = "DeleteHome")]
        [HttpDelete]
        public IHttpActionResult DeleteHome(long homeId)
        {
            _homeFacade.DeleteHome(homeId);
            return Ok();
        }
    }
}
