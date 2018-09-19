using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MezabElRahma.BLL.DTOs;

namespace MezabElRahma.BLL.Services.Interfaces
{
    public interface ICurrencyFacade
    {
        PagedResultsDTO GetAllPagingCurrenciesForLoggedUser(long userId, int page, int pageSize);
        void DeleteCurrency(long currencyId);
        void AddCurrency(CurrencyDTO currencyDto, long userID);
        void UpdateCurrency(long userId, CurrencyDTO currencyDto);
        List<CurrencyDTO> GetAllCurrencies(long userId);
    }
}
