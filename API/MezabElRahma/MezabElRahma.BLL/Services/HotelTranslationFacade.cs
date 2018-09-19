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
    public class HotelTranslationFacade : BaseFacade, IHotelTranslationFacade
    {
        private IHotelTranslationService _hotelTranslationService;

        public HotelTranslationFacade(IHotelTranslationService hotelTranslationService, IUnitOfWorkAsync unitOfWork) : base(unitOfWork)
        {
            _hotelTranslationService = hotelTranslationService;
        }
    }
}
