using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using MezabElRahma.BLL.DataServices.Interfaces;
using MezabElRahma.BLL.DTOs;
using MezabElRahma.BLL.Services.Interfaces;
using MezabElRahma.Common.CustomException;
using MezabElRahma.DAL.Entities.Model;
using Repository.Pattern.UnitOfWork;

namespace MezabElRahma.BLL.Services
{
    public class CurrencyFacade :BaseFacade, ICurrencyFacade
    {
        private ICurrencyService _currencyService;
        private ICurrencyTranslationService _currencyTranslationService;

        public CurrencyFacade(ICurrencyService currencyService, ICurrencyTranslationService currencyTranslationService, IUnitOfWorkAsync unitOfWork) : base(unitOfWork)
        {
            _currencyService = currencyService;
            _currencyTranslationService = currencyTranslationService;
        }
        public List<CurrencyDTO> GetAllCurrencies(long userId)
        {
            var currencies = _currencyService.GetAllCurrencies(userId);
            return Mapper.Map<List<CurrencyDTO>>(currencies);
        }
        public PagedResultsDTO GetAllPagingCurrenciesForLoggedUser(long userId, int page, int pageSize)
        {
            var currencies = _currencyService.GetAllCurrenciesForCertainUser(userId, page, pageSize);
            return currencies;
        }
        public void DeleteCurrency(long currencyId)
        {
            var currency = _currencyService.Find(currencyId);
            if (currency == null) throw new NotFoundException(ErrorCodes.CurrencyNotFound);
            currency.IsDeleted = true;
            _currencyService.Update(currency);
            SaveChanges();
        }

        public void AddCurrency(CurrencyDTO currencyDto, long userId)
        {
            var currency = new Currency();
            //var nameValid = _currencyService.emailValidation(currencyDto.ContactEmail);

            //foreach (var item in nameValid)
            //{
            //    if (nameValid != null && item.UserID == userID) throw new NotFoundException(ErrorCodes.RepeatedContactEmail);
            //}

            currency.CreationTime = DateTime.Now;
            currency.CreatorUserId = userId;
            currency.IsDeleted = false;
            _currencyService.Insert(currency);

            var currencyTrans = new CurrencyTranslation();
            currencyTrans.Language = "en";
            currencyTrans.Title = currencyDto.TitleDictionary["en"];
            currencyTrans.CurrencyId = currency.CurrencyId;
            _currencyTranslationService.Insert(currencyTrans);
            SaveChanges();
            currencyTrans.Language = "ar";
            currencyTrans.Title = currencyDto.TitleDictionary["ar"];
            currencyTrans.CurrencyId = currency.CurrencyId;
            _currencyTranslationService.Insert(currencyTrans);
            SaveChanges();
        }

        public void UpdateCurrency(long userId, CurrencyDTO currencyDto)
        {
            var currency = _currencyService.Find(currencyDto.CurrencyId);
            if (currency == null) throw new NotFoundException(ErrorCodes.CurrencyNotFound);
            //var nameValid = _currencyService.emailValidation(currencyDto.ContactName);
            //foreach (var item in nameValid)
            //{
            //    if (nameValid != null && item.ContactID != contactDto.ContactID && item.UserID == userID) throw new NotFoundException(ErrorCodes.RepeatedContactEmail);
            //}
            // if (nameValid != null && nameValid.ContactID != contactDto.ContactID) throw new NotFoundException(ErrorCodes.RepeatedContactEmail);
            currency.LastModificationTime = DateTime.Now;
            currency.LastModifierUserId = userId;
            _currencyService.Update(currency);

            var currencyTrans = _currencyTranslationService.GetTransByCurrencyId(currency.CurrencyId);

            for (int i = 0; i < 2; i++)
            {
                if (currencyTrans[i].Language == "en")
                { 
                    currencyTrans[i].Title = currencyDto.TitleDictionary["en"];
                    SaveChanges();
                }
                else if (currencyTrans[i].Language == "ar")
                {
                    currencyTrans[i].Title = currencyDto.TitleDictionary["ar"];
                    SaveChanges();
                }
            }
            SaveChanges();
        }
    }
}
