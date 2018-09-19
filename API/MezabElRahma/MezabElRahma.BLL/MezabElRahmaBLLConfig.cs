using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.Configuration;
using MezabElRahma.BLL.DataServices;
using MezabElRahma.BLL.DataServices.Interfaces;
using MezabElRahma.BLL.DTOs;
using MezabElRahma.BLL.Services.ManageStorage;
using Unity;
using Unity.Lifetime;
using MezabElRahma.DAL;
using MezabElRahma.DAL.Entities.Model;

namespace MezabElRahma.BLL
{
    public static class MezabElRahmaBLLConfig
    {
        public static void RegisterMappings(MapperConfigurationExpression mapperConfiguration)
        {
            //mapperConfiguration.CreateMap<Invitation, InvitationDTO>();
            mapperConfiguration.CreateMap<RefreshTokenDto, RefreshToken>().ReverseMap();
            mapperConfiguration.CreateMap<UserDTO, User>().ReverseMap();
            mapperConfiguration.CreateMap<TemplateDTO, Template>().ReverseMap();
            mapperConfiguration.CreateMap<HomeDTO, Home>().ReverseMap()
                .ForMember(dto => dto.DescriptionDictionary, m => m.MapFrom(src => src.HomeTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Description)))
                .ForMember(dto => dto.ColoredTitleDictionary, m => m.MapFrom(src => src.HomeTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.ColoredTitle)))
                .ForMember(dto => dto.SubTitleDictionary, m => m.MapFrom(src => src.HomeTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.SubTitle)))
                .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.HomeTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)));
            mapperConfiguration.CreateMap<HomeTranslationDTO, HomeTranslation>().ReverseMap();
            mapperConfiguration.CreateMap<HotelDTO, Hotel>().ReverseMap()
                .ForMember(dto => dto.DescriptionDictionary, m => m.MapFrom(src => src.HotelTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Description)))
                .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.HotelTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)));
            mapperConfiguration.CreateMap<HotelTranslationDTO, HotelTranslation>().ReverseMap();
            mapperConfiguration.CreateMap<OfferDTO, Offer>().ReverseMap()
                .ForMember(dto => dto.DescriptionDictionary, m => m.MapFrom(src => src.OfferTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Description)))
                .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.OfferTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)));
            mapperConfiguration.CreateMap<OfferTranslationDTO, OfferTranslation>().ReverseMap();
            mapperConfiguration.CreateMap<CurrencyDTO, Currency>().ReverseMap()
                .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.CurrencyTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)));
            mapperConfiguration.CreateMap<CurrencyTranslationDTO, CurrencyTranslation>().ReverseMap();
            mapperConfiguration.CreateMap<OurTeamDTO, OurTeam>().ReverseMap()
                .ForMember(dto => dto.DescriptionDictionary, m => m.MapFrom(src => src.OurTeamTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Description)))
                .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.OurTeamTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)));
            mapperConfiguration.CreateMap<OfferTranslationDTO, OfferTranslation>().ReverseMap();
            mapperConfiguration.CreateMap<ContactUsDTO, ContactUs>().ReverseMap();
            mapperConfiguration.CreateMap<AboutUsDTO, AboutUs>().ReverseMap()
                .ForMember(dto => dto.DescriptionDictionary, m => m.MapFrom(src => src.AboutUsTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Description)))
                .ForMember(dto => dto.BoldArticleDictionary, m => m.MapFrom(src => src.AboutUsTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.BoldArticle)))
                .ForMember(dto => dto.HeaderDictionary, m => m.MapFrom(src => src.AboutUsTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Header)))
                .ForMember(dto => dto.SubTitleDictionary, m => m.MapFrom(src => src.AboutUsTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.SubTitle)))
                .ForMember(dto => dto.TitleColoredDictionary, m => m.MapFrom(src => src.AboutUsTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.TitleColored)))
                .ForMember(dto => dto.TitleDictionary, m => m.MapFrom(src => src.AboutUsTranslations.ToDictionary(translation => translation.Language.ToLower(), translation => translation.Title)));
            mapperConfiguration.CreateMap<AboutUsTranslationDTO, AboutUsTranslation>().ReverseMap();



            Mapper.Initialize(mapperConfiguration);
        }

        public static void RegisterTypes(IUnityContainer container)
        {
            MezabElRahmaDALConfig.RegisterTypes(container);
            container
                .RegisterType<IRefreshTokenService, RefreshTokenService>(new PerResolveLifetimeManager())
                .RegisterType<IManageStorage, ManageStorage>(new PerResolveLifetimeManager())
                .RegisterType<IUserService, UserService>(new PerResolveLifetimeManager())
                .RegisterType<ITemplateService, TemplateService>(new PerResolveLifetimeManager())
                .RegisterType<IPackageService, PackageService>(new PerResolveLifetimeManager())
                .RegisterType<IHomeService, HomeService>(new PerResolveLifetimeManager())
                .RegisterType<IOurTeamService, OurTeamService>(new PerResolveLifetimeManager())
                .RegisterType<IOfferService, OfferService>(new PerResolveLifetimeManager())
                .RegisterType<IHotelService, HotelService>(new PerResolveLifetimeManager())
                .RegisterType<IOfferTranslationService, OfferTranslationService>(new PerResolveLifetimeManager())
                .RegisterType<IHotelTranslationService, HotelTranslationService>(new PerResolveLifetimeManager())
                .RegisterType<IOurTeamTranslationService, OurTeamTranslationService>(new PerResolveLifetimeManager())
                .RegisterType<IHomeTranslationService, HomeTranslationService>(new PerResolveLifetimeManager())
                .RegisterType<ICurrencyService, CurrencyService>(new PerResolveLifetimeManager())
                .RegisterType<ICurrencyTranslationService, CurrencyTranslationService>(new PerResolveLifetimeManager())
                .RegisterType<IContactUsService, ContactUsService>(new PerResolveLifetimeManager())
                .RegisterType<IAboutUsService, AboutUsService>(new PerResolveLifetimeManager())
                .RegisterType<IAboutUsTranslationService, AboutUsTranslationService>(new PerResolveLifetimeManager())
                ;
        }
    }
}
