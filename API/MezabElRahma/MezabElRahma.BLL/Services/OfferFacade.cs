using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MezabElRahma.BLL.DataServices.Interfaces;
using MezabElRahma.BLL.DTOs;
using MezabElRahma.BLL.Services.Interfaces;
using MezabElRahma.Common.CustomException;
using MezabElRahma.DAL.Entities.Model;
using Repository.Pattern.UnitOfWork;

namespace MezabElRahma.BLL.Services
{
    public class OfferFacade : BaseFacade, IOfferFacade
    {
        private IOfferService _offerService;
        private IOfferTranslationService _offerTranslationService;

        public OfferFacade(IOfferService offerService, IOfferTranslationService offerTranslationService, IUnitOfWorkAsync unitOfWork) : base(unitOfWork)
        {
            _offerService = offerService;
            _offerTranslationService = offerTranslationService;
        }
        public PagedResultsDTO GetAllPagingOffersForLoggedUser(long userId, int page, int pageSize)
        {
            var offers = _offerService.GetAllOffersForCertainUser(userId, page, pageSize);
            return offers;
        }
        public void DeleteOffer(long offerId)
        {
            var offer = _offerService.Find(offerId);
            if (offer == null) throw new NotFoundException(ErrorCodes.OfferNotFound);
            offer.IsDeleted = true;
            _offerService.Update(offer);
            SaveChanges();
        }

        public void AddOffer(OfferDTO offerDto, long userId)
        {
            var offer = new Offer();

            offer.CreationTime = DateTime.Now;
            offer.CreatorUserId = userId;
            offer.IsDeleted = false;
            offer.IsMain = offerDto.IsMain;
            offer.Price = offerDto.Price;
            offer.CurrencyTypeId = offerDto.CurrencyTypeId;
            offer.Rate = offerDto.Rate;
            offer.TemplateId = offerDto.TemplateId;


            _offerService.Insert(offer);

            var offerTrans = new OfferTranslation();
            offerTrans.Language = "en";
            offerTrans.Title = offerDto.TitleDictionary["en"];
            offerTrans.Description = offerDto.DescriptionDictionary["en"];
            offerTrans.OfferId = offer.OfferId;
            _offerTranslationService.Insert(offerTrans);
            SaveChanges();

            offerTrans.Language = "ar";
            offerTrans.Title = offerDto.TitleDictionary["ar"];
            offerTrans.Description = offerDto.DescriptionDictionary["ar"];
            offerTrans.OfferId = offer.OfferId;
            _offerTranslationService.Insert(offerTrans);
            SaveChanges();
        }

        public void UpdateOffer(long userId, OfferDTO offerDto)
        {
            var offer = _offerService.Find(offerDto.OfferId);
            if (offer == null) throw new NotFoundException(ErrorCodes.OfferNotFound);

            offer.LastModificationTime = DateTime.Now;
            offer.LastModifierUserId = userId;
            offer.IsMain = offerDto.IsMain;
            offer.Price = offerDto.Price;
            offer.CurrencyTypeId = offerDto.CurrencyTypeId;
            offer.Rate = offerDto.Rate;
            offer.TemplateId = offerDto.TemplateId;

            _offerService.Update(offer);

            var offerTrans = _offerTranslationService.GetTransByOfferId(offer.OfferId);

            for (int i = 0; i < 2; i++)
            {
                if (offerTrans[i].Language == "en")
                {
                    offerTrans[i].Title = offerDto.TitleDictionary["en"];
                    offerTrans[i].Description = offerDto.DescriptionDictionary["en"];
                    SaveChanges();
                }
                else if (offerTrans[i].Language == "ar")
                {
                    offerTrans[i].Title = offerDto.TitleDictionary["ar"];
                    offerTrans[i].Description = offerDto.DescriptionDictionary["ar"];
                    SaveChanges();
                }
            }
            SaveChanges();
        }
    }
}
