using AutoMapper;
using MezabElRahma.BLL.Services.Interfaces;
using MezabElRahma.Common.CustomException;
using Repository.Pattern.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MezabElRahma.BLL.DataServices.Interfaces;
using MezabElRahma.BLL.DTOs;
using MezabElRahma.DAL.Entities.Model;

namespace MezabElRahma.BLL.Services
{
    public class PackageFacade : BaseFacade, IPackageFacade
    {
        private IPackageService _packageService;

        public PackageFacade(IUnitOfWorkAsync unitOfWork, IPackageService packageService) : base(unitOfWork)
        {
            _packageService = packageService;
        }

        public void UpdatePackage(PackageDTO packageDto)
        {
            var package = _packageService.GetPackageByGUID(packageDto.PackageGuid);
            if (package == null) throw new NotFoundException(ErrorCodes.PackageNotFound);

            package.Limit = packageDto.Limit;
            package.Start = packageDto.Start;
            package.End = packageDto.End;
            package.UserConsumer = packageDto.UserConsumer;

            _packageService.Update(package);
            SaveChanges();
        }

        public PackageDTO GetAllPackagesForLoggedUser(long userId)
        {
            var packages = _packageService.GetAllPackagesForTotal(userId);

            var totalInvitees = 0;
            var consumedInvitees = 0;
            var package = new Package();

            foreach (var item in packages)
            {
                totalInvitees += item.Limit;
                consumedInvitees += item.UserConsumer;
            }

            package.Limit = totalInvitees;
            package.UserConsumer = consumedInvitees;

            return Mapper.Map<PackageDTO>(package);
        }
    }
}
