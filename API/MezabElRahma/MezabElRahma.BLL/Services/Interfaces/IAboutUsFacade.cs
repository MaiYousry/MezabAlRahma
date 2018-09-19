using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MezabElRahma.BLL.DTOs;

namespace MezabElRahma.BLL.Services.Interfaces
{
    public interface IAboutUsFacade
    {
        PagedResultsDTO GetAllPagingAboutUsesForLoggedUser(long userId, int page, int pageSize);
        void DeleteAboutUs(long aboutUsId);
        void AddAboutUs(AboutUsDTO aboutUsDto, long userId);
        void UpdateAboutUs(long userId, AboutUsDTO aboutUsDto);
        AboutUsDTO GetAboutUs();
    }
}
