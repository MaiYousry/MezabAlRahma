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
    public class HotelsController : BaseApiController
    {
        private IHotelFacade _hotelFacade;
        private IPackageFacade _packageFacade;

        public HotelsController(IHotelFacade hotelFacade, IPackageFacade packageFacade)
        {
            _hotelFacade = hotelFacade;
            _packageFacade = packageFacade;
        }

        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/HotelsPaging", Name = "GetAllPagingHotels")]
        [HttpGet]
        [ResponseType(typeof(IEnumerable<HotelModel>))]
        public IHttpActionResult GetAllPagingHotels(int page = Page, int pagesize = PageSize)
        {
            var hotels = _hotelFacade.GetAllPagingHotelsForLoggedUser(UserId, page, pagesize);
            var data = Mapper.Map<List<HotelModel>>(hotels.Data);

            return PagedResponse("GetAllPagingHotels", page, pagesize, hotels.TotalCount, data, true);
        }


        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/Hotels", Name = "AddHotel")]
        [HttpPost]
        public IHttpActionResult AddHotel([FromBody] HotelModel hotelModel)
        {
            _hotelFacade.AddHotel(Mapper.Map<HotelDTO>(hotelModel), UserId);
            return Ok();
        }

        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/Hotels", Name = "UpdateHotel")]
        [HttpPut]
        public IHttpActionResult UpdateHotel([FromBody] HotelModel hotelModel)
        {
            _hotelFacade.UpdateHotel(UserId, Mapper.Map<HotelDTO>(hotelModel));
            return Ok();
        }

        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/Hotels/{hotelId:long}", Name = "DeleteHotel")]
        [HttpDelete]
        public IHttpActionResult DeleteHotel(long hotelId)
        {
            _hotelFacade.DeleteHotel(hotelId);
            return Ok();
        }
    }
}