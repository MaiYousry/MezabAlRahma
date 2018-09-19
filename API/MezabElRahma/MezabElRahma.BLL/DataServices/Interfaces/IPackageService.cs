using Service.Pattern;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MezabElRahma.DAL.Entities.Model;

namespace MezabElRahma.BLL.DataServices.Interfaces
{
    public interface IPackageService : IService<Package>
    {
        Package GetPackageByGUID(Guid packageGuid);
        List<Package> GetAllPackagesForTotal(long userId);
        List<Package> GetPackageByUserId(long userId);
    }
}
