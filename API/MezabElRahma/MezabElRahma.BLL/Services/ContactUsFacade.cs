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
    public class ContactUsFacade : BaseFacade, IContactUsFacade
    {
        private IContactUsService _contactUsService;

        public ContactUsFacade(IContactUsService contactUsService, IUnitOfWorkAsync unitOfWork) : base(unitOfWork)
        {
            _contactUsService = contactUsService;
        }
        public ContactUsDTO GetContactUsForLoggedUser(long userId)
        {
            var currencies = _contactUsService.GetContactUsForLoggedUser(userId);
            return Mapper.Map<ContactUsDTO>(currencies);
        }
        public ContactUsDTO GetContactUs()
        {
            var contactUs = _contactUsService.GetContactUs();
            return Mapper.Map<ContactUsDTO>(contactUs);
        }
        public void UpdateContactUs(long userId, ContactUsDTO contactUsDto)
        {
            var contactUs = _contactUsService.Find(contactUsDto.ContactUsId);
            if (contactUs == null) throw new NotFoundException(ErrorCodes.ContactUsNotFound);
            contactUs.LastModificationTime = DateTime.Now;
            contactUs.LastModifierUserId = userId;
            contactUs.CompanyNumber = contactUsDto.CompanyNumber;
            contactUs.WhatsAppNumber = contactUsDto.WhatsAppNumber;
            contactUs.Email = contactUsDto.Email;
            contactUs.OwnerEmail = contactUsDto.OwnerEmail;
            contactUs.Location = contactUsDto.Location;
            contactUs.ShowEmail = contactUsDto.ShowEmail;
            contactUs.ShowMobile = contactUsDto.ShowMobile;
            contactUs.ShowOwnerEmail = contactUsDto.ShowOwnerEmail;
            contactUs.ShowFacebook = contactUsDto.ShowFacebook;
            contactUs.ShowGmail = contactUsDto.ShowGmail;
            contactUs.ShowTwitter = contactUsDto.ShowTwitter;
            contactUs.ShowWhatsApp = contactUsDto.ShowWhatsApp;
            contactUs.FacebookLink = contactUsDto.FacebookLink;
            contactUs.GmailLink = contactUsDto.GmailLink;
            contactUs.TwitterLink = contactUsDto.TwitterLink;
            _contactUsService.Update(contactUs);
            
            SaveChanges();
        }

        public void AddContactUs(ContactUsDTO contactUsDto, long userId)
        {
            var contactUs = new ContactUs();

            contactUs.CreationTime = DateTime.Now;
            contactUs.CreatorUserId = userId;
            contactUs.CompanyNumber = contactUsDto.CompanyNumber;
            contactUs.WhatsAppNumber = contactUsDto.WhatsAppNumber;
            contactUs.OwnerEmail = contactUsDto.OwnerEmail;
            contactUs.Email = contactUsDto.Email;
            contactUs.Location = contactUsDto.Location;
            contactUs.ShowEmail = contactUsDto.ShowEmail;
            contactUs.ShowMobile = contactUsDto.ShowMobile;
            contactUs.ShowFacebook = contactUsDto.ShowFacebook;
            contactUs.ShowGmail = contactUsDto.ShowGmail;
            contactUs.ShowTwitter = contactUsDto.ShowTwitter;
            contactUs.ShowOwnerEmail = contactUsDto.ShowOwnerEmail;
            contactUs.ShowWhatsApp = contactUsDto.ShowWhatsApp;
            contactUs.FacebookLink = contactUsDto.FacebookLink;
            contactUs.GmailLink = contactUsDto.GmailLink;
            contactUs.TwitterLink = contactUsDto.TwitterLink;

            _contactUsService.Insert(contactUs);
            SaveChanges();
        }
    }
}
