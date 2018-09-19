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
    public class HomeFacade: BaseFacade, IHomeFacade
    {
        private IHomeService _homeService;
        private IHomeTranslationService _homeTranslationService;

        public HomeFacade(IHomeService homeService, IHomeTranslationService homeTranslationService, IUnitOfWorkAsync unitOfWork) : base(unitOfWork)
        {
            _homeService = homeService;
            _homeTranslationService = homeTranslationService;
        }
        public PagedResultsDTO GetAllPagingHomesForLoggedUser(long userId, int page, int pageSize)
        {
            var homes = _homeService.GetAllHomesForCertainUser(userId, page, pageSize);
            return homes;
        }
        public HomeDTO GetHome()
        {
            var home = _homeService.GetHome();
            return Mapper.Map<HomeDTO>(home);
        }
        public void DeleteHome(long homeId)
        {
            var home = _homeService.Find(homeId);
            if (home == null) throw new NotFoundException(ErrorCodes.HomeNotFound);
            home.IsDeleted = true;
            _homeService.Update(home);
            SaveChanges();
        }

        public void AddHome(HomeDTO homeDto, long userId)
        {
            var home = new Home();

            home.CreationTime = DateTime.Now;
            home.CreatorUserId = userId;
            home.IsDeleted = false;
            home.IsMain = homeDto.IsMain;
            home.Price = homeDto.Price;
            home.CurrencyTypeId = homeDto.CurrencyTypeId;
            home.Rate = homeDto.Rate;
            home.TemplateId = homeDto.TemplateId;


            _homeService.Insert(home);

            var homeTrans = new HomeTranslation();
            homeTrans.Language = "en";
            homeTrans.Title = homeDto.TitleDictionary["en"];
            homeTrans.Description = homeDto.DescriptionDictionary["en"];
            homeTrans.ColoredTitle = homeDto.ColoredTitleDictionary["en"];
            homeTrans.HomeId = home.HomeId;
            homeTrans.SubTitle = homeDto.SubTitleDictionary["en"];
            _homeTranslationService.Insert(homeTrans);
            SaveChanges();

            homeTrans.Language = "ar";
            homeTrans.Title = homeDto.TitleDictionary["ar"];
            homeTrans.Description = homeDto.DescriptionDictionary["ar"];
            homeTrans.ColoredTitle = homeDto.ColoredTitleDictionary["ar"];
            homeTrans.SubTitle = homeDto.SubTitleDictionary["ar"];
            homeTrans.HomeId = home.HomeId;
            _homeTranslationService.Insert(homeTrans);
            SaveChanges();
        }
        
        public void UpdateHome(long userId, HomeDTO homeDto)
        {
            var home = _homeService.Find(homeDto.HomeId);
            if (home == null) throw new NotFoundException(ErrorCodes.HomeNotFound);

            home.LastModificationTime = DateTime.Now;
            home.LastModifierUserId = userId;
            home.IsMain = homeDto.IsMain;
            home.Price = homeDto.Price;
            home.CurrencyTypeId = homeDto.CurrencyTypeId;
            home.Rate = homeDto.Rate;
            home.TemplateId = homeDto.TemplateId;

            _homeService.Update(home);

            var homeTrans = _homeTranslationService.GetTransByHomeId(home.HomeId);

            for (int i = 0; i < 2; i++)
            {
                if (homeTrans[i].Language == "en")
                {
                    homeTrans[i].Title = homeDto.TitleDictionary["en"];
                    homeTrans[i].Description = homeDto.DescriptionDictionary["en"];
                    homeTrans[i].ColoredTitle = homeDto.ColoredTitleDictionary["en"];
                    homeTrans[i].SubTitle = homeDto.SubTitleDictionary["en"];
                    SaveChanges();
                }
                else if (homeTrans[i].Language == "ar")
                {
                    homeTrans[i].Title = homeDto.TitleDictionary["ar"];
                    homeTrans[i].Description = homeDto.DescriptionDictionary["ar"];
                    homeTrans[i].ColoredTitle = homeDto.ColoredTitleDictionary["ar"];
                    homeTrans[i].SubTitle = homeDto.SubTitleDictionary["ar"];
                    SaveChanges();
                }
            }
            SaveChanges();
        }
    }
}
