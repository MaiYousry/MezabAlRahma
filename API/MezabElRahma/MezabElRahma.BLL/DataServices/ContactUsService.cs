using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using MezabElRahma.BLL.DataServices.Interfaces;
using MezabElRahma.BLL.DTOs;
using MezabElRahma.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;

namespace MezabElRahma.BLL.DataServices
{
    public class ContactUsService : Service<ContactUs>, IContactUsService
    {
        public ContactUsService(IRepositoryAsync<ContactUs> repository) : base(repository)
        {

        }

        public ContactUs GetContactUsForLoggedUser(long userId)
        {
            var contactUs = _repository.Query().Select().FirstOrDefault(x => x.CreatorUserId == userId);
            return contactUs;
        }
        public ContactUs GetContactUs()
        {
            var contactUs = _repository.Query().Select().FirstOrDefault(x => x.CreatorUserId == 1);
            return contactUs;
        }
    }
}
