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
    public interface IHotelService : IService<Hotel>
    {
        List<Hotel> HotelsPaging(long userId);
        PagedResultsDTO GetAllHotelsForCertainUser(long userId, int page, int pageSize);
    }
}
