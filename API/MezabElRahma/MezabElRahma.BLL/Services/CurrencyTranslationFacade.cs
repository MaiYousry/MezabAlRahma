using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MezabElRahma.BLL.DataServices.Interfaces;
using MezabElRahma.BLL.Services.Interfaces;
using Repository.Pattern.UnitOfWork;

namespace MezabElRahma.BLL.Services
{
    public class CurrencyTranslationFacade : BaseFacade, ICurrencyTranslationFacade
    {
        private ICurrencyTranslationService _currencyTranslationService;

        public CurrencyTranslationFacade(ICurrencyTranslationService currencyTranslationService, IUnitOfWorkAsync unitOfWork) : base(unitOfWork)
        {
            _currencyTranslationService = currencyTranslationService;
        }
    }
}
