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
    public interface ICurrencyService : IService<Currency>
    {
        PagedResultsDTO GetAllCurrenciesForCertainUser(long userId, int page, int pageSize);
        List<Currency> GetAllCurrencies(long userId);
    }
}
