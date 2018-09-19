using MezabElRahma.BLL.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MezabElRahma.BLL.Services.Interfaces
{
    public interface IPackageFacade
    {
        void UpdatePackage(PackageDTO packageDto);
        PackageDTO GetAllPackagesForLoggedUser(long userId);
    }
}
