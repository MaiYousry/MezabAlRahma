using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MezabElRahma.DAL.Entities.Model;
using Repository.Pattern.Ef6;

namespace MezabElRahma.DAL.Entities
{
    public class MezabElRahmaContext : DataContext
    {
        public MezabElRahmaContext() : base("name=MezabElRahmaDB")
        {
            Database.SetInitializer<MezabElRahmaContext>(null);
        }

        public DbSet<ContactUs> ContactUss { get; set; }
        public DbSet<Currency> Currencies { get; set; }
        public DbSet<CurrencyTranslation> CurrencyTranslations { get; set; }
        public DbSet<Home> Homes { get; set; }
        public DbSet<HomeTranslation> HomeTranslations { get; set; }
        public DbSet<Hotel> Hotels { get; set; }
        public DbSet<HotelTranslation> HotelTranslations { get; set; }
        public DbSet<Offer> Offers { get; set; }
        public DbSet<OfferTranslation> OfferTranslations { get; set; }
        public DbSet<OurTeam> OurTeams { get; set; }
        public DbSet<OurTeamTranslation> OurTeamTranslations { get; set; }
        public DbSet<Template> Templates { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<RefreshToken> RefreshTokens { get; set; }
        public DbSet<AboutUs> AboutUses { get; set; }
        public DbSet<AboutUsTranslation> AboutUsTranslations { get; set; }

        //protected override void OnModelCreating(DbModelBuilder modelBuilder)
        //{
        //    base.OnModelCreating(modelBuilder);
        //    modelBuilder.Entity<ContactUs>()
        //        .HasRequired(c => c.User)
        //        .WithMany()
        //        .WillCascadeOnDelete(false);

        //    modelBuilder.Entity<Currency>()
        //        .HasRequired(c => c.User)
        //        .WithMany()
        //        .WillCascadeOnDelete(false);

        //    modelBuilder.Entity<Home>()
        //        .HasRequired(c => c.User)
        //        .WithMany()
        //        .WillCascadeOnDelete(false);

        //    //modelBuilder.Entity<Home>()
        //    //    .HasRequired(c => c.Template)
        //    //    .WithMany()
        //    //    .WillCascadeOnDelete(false);

        //    modelBuilder.Entity<Offer>()
        //        .HasRequired(c => c.User)
        //        .WithMany()
        //        .WillCascadeOnDelete(false);

        //    modelBuilder.Entity<OurTeam>()
        //        .HasRequired(c => c.User)
        //        .WithMany()
        //        .WillCascadeOnDelete(false);

        //    modelBuilder.Entity<Template>()
        //        .HasRequired(c => c.User)
        //        .WithMany()
        //        .WillCascadeOnDelete(false);


        //}
    }
}
