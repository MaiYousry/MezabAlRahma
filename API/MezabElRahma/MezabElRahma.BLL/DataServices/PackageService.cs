
using Repository.Pattern.Repositories;
using Service.Pattern;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MezabElRahma.BLL.DataServices.Interfaces;
using MezabElRahma.DAL.Entities.Model;

namespace MezabElRahma.BLL.DataServices
{
    public class PackageService : Service<Package>, IPackageService
    {
        public PackageService(IRepositoryAsync<Package> repository) : base(repository)
        {

        }
        public Package GetPackageByGUID(Guid packageGuid)
        {
            var package = _repository.Query(x => x.PackageGuid == packageGuid).Select().FirstOrDefault();
            return package;
        }

        public List<Package> GetPackageByUserId(long userId)
        {
            var currentDate = DateTime.Now;
            var packages = _repository.Query(x => x.UserId == userId && x.UserConsumer < x.Limit && x.Start <= currentDate && x.End >= currentDate).Select().OrderBy(x=>x.End).ToList();
            return packages;
        }

        public List<Package> GetAllPackagesForTotal(long userId)
        {
            var currentDate = DateTime.Now;
            var packages = _repository.Query(x => x.UserId == userId && x.Start <= currentDate && x.End >= currentDate).Select().OrderBy(x => x.End).ToList();
            return packages;
        }
    }
}
