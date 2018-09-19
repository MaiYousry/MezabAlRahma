using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MezabElRahma.BLL.DTOs;

namespace MezabElRahma.BLL.Services.Interfaces
{
    public interface IHomeFacade
    {
        PagedResultsDTO GetAllPagingHomesForLoggedUser(long userId, int page, int pageSize);
        void DeleteHome(long homeId);
        void UpdateHome(long userId, HomeDTO homeDto);
        void AddHome(HomeDTO homeDto, long userId);
        HomeDTO GetHome();
    }
}
