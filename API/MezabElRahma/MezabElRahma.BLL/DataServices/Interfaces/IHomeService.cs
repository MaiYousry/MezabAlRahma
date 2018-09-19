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
    public interface IHomeService : IService<Home>
    {
        List<Home> HomesPaging(long userId);
        PagedResultsDTO GetAllHomesForCertainUser(long userId, int page, int pageSize);
        Home GetHome();
        Home relationTempHome(long templateId);
    }
}
