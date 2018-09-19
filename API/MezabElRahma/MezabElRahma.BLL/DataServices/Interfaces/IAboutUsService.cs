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
    public interface IAboutUsService : IService<AboutUs>
    {
        List<AboutUs> AboutUsesPaging(long userId);
        PagedResultsDTO GetAllAboutUsesForCertainUser(long userId, int page, int pageSize);
        AboutUs GetAboutUs();
        AboutUs relationTempAbout(long templateId);
    }
}
