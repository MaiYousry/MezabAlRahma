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
    public class AboutUsFacade : BaseFacade, IAboutUsFacade
    {
        private IAboutUsService _aboutUsService;
        private IAboutUsTranslationService _aboutUsTranslationService;

        public AboutUsFacade(IAboutUsService aboutUsService, IAboutUsTranslationService aboutUsTranslationService, IUnitOfWorkAsync unitOfWork) : base(unitOfWork)
        {
            _aboutUsService = aboutUsService;
            _aboutUsTranslationService = aboutUsTranslationService;
        }

        public AboutUsDTO GetAboutUs()
        {
            var aboutUs = Mapper.Map<AboutUsDTO>(_aboutUsService.GetAboutUs());
            return aboutUs;
        }

        public PagedResultsDTO GetAllPagingAboutUsesForLoggedUser(long userId, int page, int pageSize)
        {
            var aboutUses = _aboutUsService.GetAllAboutUsesForCertainUser(userId, page, pageSize);
            return aboutUses;
        }
        public void DeleteAboutUs(long aboutUsId)
        {
            var aboutUs = _aboutUsService.Find(aboutUsId);
            if (aboutUs == null) throw new NotFoundException(ErrorCodes.AboutUsNotFound);
            aboutUs.IsDeleted = true;
            _aboutUsService.Update(aboutUs);
            SaveChanges();
        }

        public void AddAboutUs(AboutUsDTO aboutUsDto, long userId)
        {
            var aboutUs = new AboutUs();

            aboutUs.CreationTime = DateTime.Now;
            aboutUs.CreatorUserId = userId;
            aboutUs.IsDeleted = false;
            aboutUs.TemplateId = aboutUsDto.TemplateId;


            _aboutUsService.Insert(aboutUs);

            var aboutUsTrans = new AboutUsTranslation();
            aboutUsTrans.Language = "en";
            aboutUsTrans.Title = aboutUsDto.TitleDictionary["en"];
            aboutUsTrans.Description = aboutUsDto.DescriptionDictionary["en"];
            //aboutUsTrans.Header = aboutUsDto.HeaderDictionary["en"];
            aboutUsTrans.SubTitle = aboutUsDto.SubTitleDictionary["en"];
            aboutUsTrans.TitleColored = aboutUsDto.TitleColoredDictionary["en"];
            aboutUsTrans.BoldArticle = aboutUsDto.BoldArticleDictionary["en"];
            aboutUsTrans.AboutUsId = aboutUs.AboutUsId;
            _aboutUsTranslationService.Insert(aboutUsTrans);
            SaveChanges();

            aboutUsTrans.Language = "ar";
            aboutUsTrans.Title = aboutUsDto.TitleDictionary["ar"];
            aboutUsTrans.Description = aboutUsDto.DescriptionDictionary["ar"];
           // aboutUsTrans.Header = aboutUsDto.HeaderDictionary["ar"];
            aboutUsTrans.SubTitle = aboutUsDto.SubTitleDictionary["ar"];
            aboutUsTrans.TitleColored = aboutUsDto.TitleColoredDictionary["ar"];
            aboutUsTrans.BoldArticle = aboutUsDto.BoldArticleDictionary["ar"];
            aboutUsTrans.AboutUsId = aboutUsTrans.AboutUsId;
            _aboutUsTranslationService.Insert(aboutUsTrans);
            SaveChanges();
        }

        public void UpdateAboutUs(long userId, AboutUsDTO aboutUsDto)
        {
            var aboutUs = _aboutUsService.Find(aboutUsDto.AboutUsId);
            if (aboutUs == null) throw new NotFoundException(ErrorCodes.AboutUsNotFound);

            aboutUs.LastModificationTime = DateTime.Now;
            aboutUs.LastModifierUserId = userId;
            aboutUs.TemplateId = aboutUsDto.TemplateId;

            _aboutUsService.Update(aboutUs);

            var aboutUsTrans = _aboutUsTranslationService.GetTransByAboutUsId(aboutUs.AboutUsId);

            for (int i = 0; i < 2; i++)
            {
                if (aboutUsTrans[i].Language == "en")
                {
                    aboutUsTrans[i].Title = aboutUsDto.TitleDictionary["en"];
                    aboutUsTrans[i].Description = aboutUsDto.DescriptionDictionary["en"];
                   // aboutUsTrans[i].Header = aboutUsDto.HeaderDictionary["en"];
                    aboutUsTrans[i].BoldArticle = aboutUsDto.BoldArticleDictionary["en"];
                    aboutUsTrans[i].SubTitle = aboutUsDto.SubTitleDictionary["en"];
                    aboutUsTrans[i].TitleColored = aboutUsDto.TitleColoredDictionary["en"];
                    SaveChanges();
                }
                else if (aboutUsTrans[i].Language == "ar")
                {
                    aboutUsTrans[i].Title = aboutUsDto.TitleDictionary["ar"];
                    aboutUsTrans[i].Description = aboutUsDto.DescriptionDictionary["ar"];
                   // aboutUsTrans[i].Header = aboutUsDto.HeaderDictionary["ar"];
                    aboutUsTrans[i].SubTitle = aboutUsDto.SubTitleDictionary["ar"];
                    aboutUsTrans[i].BoldArticle = aboutUsDto.BoldArticleDictionary["ar"];
                    aboutUsTrans[i].TitleColored = aboutUsDto.TitleColoredDictionary["ar"];
                    SaveChanges();
                }
            }
            SaveChanges();
        }
    }
}
