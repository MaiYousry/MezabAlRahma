using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using MezabElRahma.BLL.DataServices.Interfaces;
using MezabElRahma.BLL.DTOs;
using MezabElRahma.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;

namespace MezabElRahma.BLL.DataServices
{
    public class CurrencyService : Service<Currency>, ICurrencyService
    {
        public CurrencyService(IRepositoryAsync<Currency> repository) : base(repository)
        {

        }

        public List<Currency> GetAllCurrencies(long userId)
        {
            var currencies = _repository.Query().Select().Where(x => !x.IsDeleted && x.CreatorUserId == userId).ToList();
            return currencies;
        }

        public PagedResultsDTO GetAllCurrenciesForCertainUser(long userId, int page, int pageSize)
        {
            PagedResultsDTO results = new PagedResultsDTO();
            results.TotalCount = _repository.Queryable().Count(x => !x.IsDeleted && x.CreatorUserId == userId);
            results.Data = Mapper.Map<List<Currency>, List<CurrencyDTO>>(_repository.Query(x => !x.IsDeleted && x.CreatorUserId == userId).Select().OrderBy(x => x.CurrencyId).Skip((page - 1) * pageSize).Take(pageSize).ToList());
            return results;
        }
    }
}
