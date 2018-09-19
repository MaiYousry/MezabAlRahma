using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MezabElRahma.BLL.DTOs;
using MezabElRahma.DAL.Entities.Model;
using Service.Pattern;

namespace MezabElRahma.BLL.DataServices.Interfaces
{
    public interface IOurTeamService : IService<OurTeam>
    {
        List<OurTeam> OurTeamsPaging(long userId);
        PagedResultsDTO GetAllOurTeamsForCertainUser(long userId, int page, int pageSize);
        List<OurTeam> GetOurTeam();
        OurTeam relationTempOurTeam(long templateId);
    }
}
