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
    public class OffersController : BaseApiController
    {
        private IOfferFacade _offerFacade;
        private IPackageFacade _packageFacade;

        public OffersController(IOfferFacade offerFacade, IPackageFacade packageFacade)
        {
            _offerFacade = offerFacade;
            _packageFacade = packageFacade;
        }

        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/OffersPaging", Name = "GetAllPagingOffers")]
        [HttpGet]
        [ResponseType(typeof(IEnumerable<OfferModel>))]
        public IHttpActionResult GetAllPagingOffers(int page = Page, int pagesize = PageSize)
        {
            var offers = _offerFacade.GetAllPagingOffersForLoggedUser(UserId, page, pagesize);
            var data = Mapper.Map<List<OfferModel>>(offers.Data);

            return PagedResponse("GetAllPagingOffers", page, pagesize, offers.TotalCount, data, true);
        }


        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/Offers", Name = "AddOffer")]
        [HttpPost]
        public IHttpActionResult AddOffer([FromBody] OfferModel offerModel)
        {
            _offerFacade.AddOffer(Mapper.Map<OfferDTO>(offerModel), UserId);
            return Ok();
        }

        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/Offers", Name = "UpdateOffer")]
        [HttpPut]
        public IHttpActionResult UpdateOffer([FromBody] OfferModel offerModel)
        {
            _offerFacade.UpdateOffer(UserId, Mapper.Map<OfferDTO>(offerModel));
            return Ok();
        }

        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/Offers/{offerId:long}", Name = "DeleteOffer")]
        [HttpDelete]
        public IHttpActionResult DeleteOffer(long offerId)
        {
            _offerFacade.DeleteOffer(offerId);
            return Ok();
        }
    }
}

