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
    public interface IOfferService : IService<Offer>
    {
        List<Offer> OffersPaging(long userId);
        PagedResultsDTO GetAllOffersForCertainUser(long userId, int page, int pageSize);
    }
}
