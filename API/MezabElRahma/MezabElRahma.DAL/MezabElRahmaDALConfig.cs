using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using MezabElRahma.DAL.Entities;
using MezabElRahma.DAL.Entities.Model;
using Repository.Pattern.DataContext;
using Repository.Pattern.Ef6;
using Repository.Pattern.Ef6.Factories;
using Repository.Pattern.Repositories;
using Unity;
using Unity.Injection;
using Unity.Lifetime;
using Repository.Pattern.UnitOfWork;

namespace MezabElRahma.DAL
{
    public static class MezabElRahmaDALConfig
    {
        public static void RegisterTypes(IUnityContainer container)
        {
            container
                .RegisterType<IDataContextAsync, MezabElRahmaContext>(new PerResolveLifetimeManager())
                .RegisterType<IUnitOfWorkAsync, UnitOfWork>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryProvider, RepositoryProvider>(
                    new PerResolveLifetimeManager(),
                    new InjectionConstructor(new object[] { new RepositoryFactories() })
                )
                .RegisterType<IRepositoryAsync<User>, Repository<User>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<ContactUs>, Repository<ContactUs>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<Currency>, Repository<Currency>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<CurrencyTranslation>, Repository<CurrencyTranslation>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<Home>, Repository<Home>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<HomeTranslation>, Repository<HomeTranslation>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<RefreshToken>, Repository<RefreshToken>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<Template>, Repository<Template>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<Hotel>, Repository<Hotel>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<HotelTranslation>, Repository<HotelTranslation>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<Offer>, Repository<Offer>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<OfferTranslation>, Repository<OfferTranslation>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<OurTeam>, Repository<OurTeam>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<OurTeamTranslation>, Repository<OurTeamTranslation>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<Package>, Repository<Package>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<ContactUs>, Repository<ContactUs>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<AboutUs>, Repository<AboutUs>>(new PerResolveLifetimeManager())
                .RegisterType<IRepositoryAsync<AboutUsTranslation>, Repository<AboutUsTranslation>>(new PerResolveLifetimeManager())
                ;

        }
    }
}
