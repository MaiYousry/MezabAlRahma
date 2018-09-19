using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MezabElRahma.BLL.DTOs;

namespace MezabElRahma.BLL.Services.Interfaces
{
    public interface IHotelFacade
    {
        PagedResultsDTO GetAllPagingHotelsForLoggedUser(long userId, int page, int pageSize);
        void DeleteHotel(long hotelId);
        void UpdateHotel(long userId, HotelDTO hotelDto);
        void AddHotel(HotelDTO hotelDto, long userId);
    }
}
