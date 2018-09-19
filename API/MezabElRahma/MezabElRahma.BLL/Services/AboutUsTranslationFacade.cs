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
    public class AboutUsTranslationFacade : BaseFacade, IAboutUsTranslationFacade
    {
        private IAboutUsTranslationService _aboutUsTranslationService;

        public AboutUsTranslationFacade(IAboutUsTranslationService aboutUsTranslationService, IUnitOfWorkAsync unitOfWork) : base(unitOfWork)
        {
            _aboutUsTranslationService = aboutUsTranslationService;
        }
    }
}
