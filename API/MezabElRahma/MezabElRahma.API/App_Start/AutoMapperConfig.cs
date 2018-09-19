using MezabElRahma.BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper.Configuration;
using MezabElRahma.API.Models;
using MezabElRahma.BLL.DTOs;

namespace MezabElRahma.API.App_Start
{
    public class AutoMapperConfig
    {
        public static void RegisterMappings()
        {

            var mapperConfiguration = new MapperConfigurationExpression();

             mapperConfiguration.CreateMap<UserDTO, UserModel>();
             mapperConfiguration.CreateMap<TemplateDTO, TemplateModel>();
             mapperConfiguration.CreateMap<HomeDTO, HomeModel>();
             mapperConfiguration.CreateMap<AboutUsDTO, AboutUsModel>();
            mapperConfiguration.CreateMap<OfferDTO, OfferModel>();
             mapperConfiguration.CreateMap<OurTeamDTO, OurTeamModel>();
             mapperConfiguration.CreateMap<HotelDTO, HotelModel>();
             mapperConfiguration.CreateMap<HomeTranslationDTO, HomeTranslationModel>();
             mapperConfiguration.CreateMap<AboutUsTranslationDTO, AboutUsTranslationModel>();
            mapperConfiguration.CreateMap<OfferTranslationDTO, OfferTranslationModel>();
             mapperConfiguration.CreateMap<OurTeamTranslationDTO, OurTeamTranslationModel>();
             mapperConfiguration.CreateMap<HotelTranslationDTO, HotelTranslationModel>();
             mapperConfiguration.CreateMap<CurrencyDTO, CurrencyModel>();
             mapperConfiguration.CreateMap<ContactUsDTO, ContactUsModel>();
             mapperConfiguration.CreateMap<CurrencyTranslationDTO, CurrencyTranslationModel>();


            MezabElRahmaBLLConfig.RegisterMappings(mapperConfiguration);

            //Mapper.Initialize(m =>
            //{
            //    m.CreateMap<RestaurantTypeModel, RestaurantTypeDto>();
            //    m.CreateProfile("ff",expression => {});
            //    //m.AddProfile(ECatalogBLLConfig);
            //});

        }
    }
}