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
    public class HotelFacade : BaseFacade, IHotelFacade
    {
        private IHotelService _hotelService;
        private IHotelTranslationService _hotelTranslationService;

        public HotelFacade(IHotelService hotelService, IHotelTranslationService hotelTranslationService, IUnitOfWorkAsync unitOfWork) : base(unitOfWork)
        {
            _hotelService = hotelService;
            _hotelTranslationService = hotelTranslationService;
        }
        public PagedResultsDTO GetAllPagingHotelsForLoggedUser(long userId, int page, int pageSize)
        {
            var hotels = _hotelService.GetAllHotelsForCertainUser(userId, page, pageSize);
            return hotels;
        }
        public void DeleteHotel(long hotelId)
        {
            var hotel = _hotelService.Find(hotelId);
            if (hotel == null) throw new NotFoundException(ErrorCodes.HotelNotFound);
            hotel.IsDeleted = true;
            _hotelService.Update(hotel);
            SaveChanges();
        }

        public void AddHotel(HotelDTO hotelDto, long userId)
        {
            var hotel = new Hotel();

            hotel.CreationTime = DateTime.Now;
            hotel.CreatorUserId = userId;
            hotel.IsDeleted = false;
            hotel.IsMain = hotelDto.IsMain;
            hotel.Price = hotelDto.Price;
            hotel.CurrencyTypeId = hotelDto.CurrencyTypeId;
            hotel.Rate = hotelDto.Rate;
            hotel.TemplateId = hotelDto.TemplateId;


            _hotelService.Insert(hotel);

            var hotelTrans = new HotelTranslation();
            hotelTrans.Language = "en";
            hotelTrans.Title = hotelDto.TitleDictionary["en"];
            hotelTrans.Description = hotelDto.DescriptionDictionary["en"];
            hotelTrans.HotelId = hotel.HotelId;
            _hotelTranslationService.Insert(hotelTrans);
            SaveChanges();

            hotelTrans.Language = "ar";
            hotelTrans.Title = hotelDto.TitleDictionary["ar"];
            hotelTrans.Description = hotelDto.DescriptionDictionary["ar"];
            hotelTrans.HotelId = hotel.HotelId;
            _hotelTranslationService.Insert(hotelTrans);
            SaveChanges();
        }

        public void UpdateHotel(long userId, HotelDTO hotelDto)
        {
            var hotel = _hotelService.Find(hotelDto.HotelId);
            if (hotel == null) throw new NotFoundException(ErrorCodes.HotelNotFound);

            hotel.LastModificationTime = DateTime.Now;
            hotel.LastModifierUserId = userId;
            hotel.IsMain = hotelDto.IsMain;
            hotel.Price = hotelDto.Price;
            hotel.CurrencyTypeId = hotelDto.CurrencyTypeId;
            hotel.Rate = hotelDto.Rate;
            hotel.TemplateId = hotelDto.TemplateId;

            _hotelService.Update(hotel);

            var hotelTrans = _hotelTranslationService.GetTransByHotelId(hotel.HotelId);

            for (int i = 0; i < 2; i++)
            {
                if (hotelTrans[i].Language == "en")
                {
                    hotelTrans[i].Title = hotelDto.TitleDictionary["en"];
                    hotelTrans[i].Description = hotelDto.DescriptionDictionary["en"];
                    SaveChanges();
                }
                else if (hotelTrans[i].Language == "ar")
                {
                    hotelTrans[i].Title = hotelDto.TitleDictionary["ar"];
                    hotelTrans[i].Description = hotelDto.DescriptionDictionary["ar"];
                    SaveChanges();
                }
            }
            SaveChanges();
        }
    }
}