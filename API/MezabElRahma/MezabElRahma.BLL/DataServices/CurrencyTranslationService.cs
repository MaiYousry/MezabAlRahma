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
    public class CurrencyTranslationService : Service<CurrencyTranslation>, ICurrencyTranslationService
    {
        public CurrencyTranslationService(IRepositoryAsync<CurrencyTranslation> repository) : base(repository)
        {

        }

        public List<CurrencyTranslation> GetTransByCurrencyId(long currencyId)
        {
            var currencyTrans = _repository.Query().Select().Where(x => x.CurrencyId == currencyId).ToList();
            return currencyTrans;
        }
    }
}
