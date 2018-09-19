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
    public class OfferTranslationFacade : BaseFacade, IOfferTranslationFacade
    {
        private IOfferTranslationService _offerTranslationService;

        public OfferTranslationFacade(IOfferTranslationService offerTranslationService, IUnitOfWorkAsync unitOfWork) : base(unitOfWork)
        {
            _offerTranslationService = offerTranslationService;
        }
    }
}
