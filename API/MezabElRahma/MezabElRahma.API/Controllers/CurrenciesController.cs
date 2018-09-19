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
    public class CurrenciesController : BaseApiController
    {
        private ICurrencyFacade _currencyFacade;
        private IPackageFacade _packageFacade;

        public CurrenciesController(ICurrencyFacade currencyFacade, IPackageFacade packageFacade)
        {
            _currencyFacade = currencyFacade;
            _packageFacade = packageFacade;
        }

        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/CurrenciesPaging", Name = "GetAllPagingCurrencies")]
        [HttpGet]
        [ResponseType(typeof(IEnumerable<CurrencyModel>))]
        public IHttpActionResult Get(int page = Page, int pagesize = PageSize)
        {
            var homes = _currencyFacade.GetAllPagingCurrenciesForLoggedUser(UserId, page, pagesize);
            var data = Mapper.Map<List<CurrencyModel>>(homes.Data);

            return PagedResponse("GetAllPagingCurrencies", page, pagesize, homes.TotalCount, data, true);
        }


        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/Currencies", Name = "GetAllCurrencies")]
        [HttpGet]
        [ResponseType(typeof(List<CurrencyModel>))]
        public IHttpActionResult GetAllCurrencies()
        { 
            var currencies = Mapper.Map<List<CurrencyModel>>(_currencyFacade.GetAllCurrencies(UserId));
            return Ok(currencies);
        }

        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/Currencies", Name = "AddCurrency")]
        [HttpPost]
        public IHttpActionResult AddCurrency([FromBody] CurrencyModel currencyModel)
        {
            _currencyFacade.AddCurrency(Mapper.Map<CurrencyDTO>(currencyModel), UserId);
            return Ok();
        }

        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/Currencies", Name = "UpdateCurrency")]
        [HttpPut]
        public IHttpActionResult UpdateCurrency([FromBody] CurrencyModel currencyModel)
        {
            _currencyFacade.UpdateCurrency(UserId, Mapper.Map<CurrencyDTO>(currencyModel));
            return Ok();
        }

        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/Currencies/{currencyId:long}", Name = "DeleteCurrency")]
        [HttpDelete]
        public IHttpActionResult DeleteCurrency(long currencyId)
        {
            _currencyFacade.DeleteCurrency(currencyId);
            return Ok();
        }
    }
}
