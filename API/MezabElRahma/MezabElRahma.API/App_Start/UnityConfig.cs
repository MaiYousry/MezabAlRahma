using MezabElRahma.BLL;
using MezabElRahma.BLL.Services;
using MezabElRahma.BLL.Services.Interfaces;
using System.Web.Http;
using Unity;
using Unity.Lifetime;
using Unity.WebApi;

namespace MezabElRahma.API
{
    public static class UnityConfig
    {
        public static void RegisterTypes(HttpConfiguration config)
        {
            // NOTE: To load from web.config uncomment the line below. Make sure to add a Microsoft.Practices.Unity.Configuration to the using statements.
            // container.LoadConfiguration();
            var container = new UnityContainer();

            // TODO: Register your types here

            ApplyMapping(container, false);


            //GlobalConfiguration.Configuration.DependencyResolver = new Unity.WebApi.UnityDependencyResolver(container);
            GlobalConfiguration.Configuration.DependencyResolver =
                config.DependencyResolver = new UnityDependencyResolver(container);


        }

        public static void ApplyMapping(IUnityContainer container, bool applyDependencyResolver)
        {
            container.RegisterType<IRefreshTokenFacade, RefreshTokenFacade>(new PerResolveLifetimeManager())
                .RegisterType<IUserFacade, UserFacade>(new PerResolveLifetimeManager())
                .RegisterType<ITemplateFacade, TemplateFacade>(new PerResolveLifetimeManager())
                .RegisterType<IPackageFacade, PackageFacade>(new PerResolveLifetimeManager())
                .RegisterType<IHomeFacade, HomeFacade>(new PerResolveLifetimeManager())
                .RegisterType<IAboutUsFacade, AboutUsFacade>(new PerResolveLifetimeManager())
                .RegisterType<IOfferFacade, OfferFacade>(new PerResolveLifetimeManager())
                .RegisterType<IOurTeamFacade, OurTeamFacade>(new PerResolveLifetimeManager())
                .RegisterType<IHotelFacade, HotelFacade>(new PerResolveLifetimeManager())
                .RegisterType<IHomeTranslationFacade, HomeTranslationFacade>(new PerResolveLifetimeManager())
                .RegisterType<IAboutUsTranslationFacade, AboutUsTranslationFacade>(new PerResolveLifetimeManager())
                .RegisterType<IOfferTranslationFacade, OfferTranslationFacade>(new PerResolveLifetimeManager())
                .RegisterType<IHotelTranslationFacade, HotelTranslationFacade>(new PerResolveLifetimeManager())
                .RegisterType<IOurTeamTranslationFacade, OurTeamTranslationFacade>(new PerResolveLifetimeManager())
                .RegisterType<ICurrencyFacade, CurrencyFacade>(new PerResolveLifetimeManager())
                .RegisterType<IContactUsFacade, ContactUsFacade>(new PerResolveLifetimeManager())
                .RegisterType<ICurrencyTranslationFacade, CurrencyTranslationFacade>(new PerResolveLifetimeManager())
                ;


            MezabElRahmaBLLConfig.RegisterTypes(container);
            if (applyDependencyResolver)
                GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);


        }
    }
}