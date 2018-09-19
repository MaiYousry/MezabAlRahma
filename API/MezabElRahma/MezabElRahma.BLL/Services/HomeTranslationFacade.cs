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
    public class HomeTranslationFacade : BaseFacade, IHomeTranslationFacade
    {
        private IHomeTranslationService _homeTranslationService;

        public HomeTranslationFacade(IHomeTranslationService homeTranslationService, IUnitOfWorkAsync unitOfWork) : base(unitOfWork)
        {
            _homeTranslationService = homeTranslationService;
        }
    }
}
