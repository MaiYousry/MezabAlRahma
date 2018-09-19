using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MezabElRahma.BLL.DTOs;

namespace MezabElRahma.BLL.Services.Interfaces
{
    public interface IOfferFacade
    {
        PagedResultsDTO GetAllPagingOffersForLoggedUser(long userId, int page, int pageSize);
        void DeleteOffer(long offerId);
        void UpdateOffer(long userId, OfferDTO offerDto);
        void AddOffer(OfferDTO offerDto, long userId);
    }
}
