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
    public class OurTeamTranslationFacade : BaseFacade, IOurTeamTranslationFacade
    {
        private IOurTeamTranslationService _ourTeamTranslationService;

        public OurTeamTranslationFacade(IOurTeamTranslationService ourTeamTranslationService, IUnitOfWorkAsync unitOfWork) : base(unitOfWork)
        {
            _ourTeamTranslationService = ourTeamTranslationService;
        }
    }
}
