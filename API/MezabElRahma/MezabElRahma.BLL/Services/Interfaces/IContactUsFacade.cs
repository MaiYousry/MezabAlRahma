using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MezabElRahma.BLL.DTOs;

namespace MezabElRahma.BLL.Services.Interfaces
{
    public interface IContactUsFacade
    {
        void UpdateContactUs(long userId, ContactUsDTO contactUsDto);
        ContactUsDTO GetContactUsForLoggedUser(long userId);
        void AddContactUs(ContactUsDTO contactUsDto, long userId);
        ContactUsDTO GetContactUs();
    }
}
