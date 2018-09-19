using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MezabElRahma.BLL.DTOs;

namespace MezabElRahma.BLL.Services.Interfaces
{
    public interface IOurTeamFacade
    {
        PagedResultsDTO GetAllPagingOurTeamsForLoggedUser(long userId, int page, int pageSize);
        void DeleteOurTeam(long ourTeamId);
        void UpdateOurTeam(long userId, OurTeamDTO ourTeamDto);
        void AddOurTeam(OurTeamDTO ourTeamDto, long userId);
        List<OurTeamDTO> GetOurTeam();
    }
}
