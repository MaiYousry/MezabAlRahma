using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MezabElRahma.DAL.Entities.Model;
using Service.Pattern;

namespace MezabElRahma.BLL.DataServices.Interfaces
{
    public interface IHomeTranslationService : IService<HomeTranslation>
    {
        List<HomeTranslation> GetTransByHomeId(long homeId);
    }
}
