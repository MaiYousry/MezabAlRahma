using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;
using MezabElRahma.BLL.DataServices.Interfaces;
using MezabElRahma.BLL.DTOs;
using MezabElRahma.BLL.Services.Interfaces;
using MezabElRahma.Common;
using MezabElRahma.Common.CustomException;
using MezabElRahma.DAL.Entities.Model;
using Repository.Pattern.UnitOfWork;

namespace MezabElRahma.BLL.Services
{
    public class UserFacade : BaseFacade, IUserFacade
    {
        private IUserService _userService;
        private IPackageService _packageService;

        public UserFacade(IUserService userService, IUnitOfWorkAsync unitOfWork, IPackageService packageService) : base(unitOfWork)
        {
            _userService = userService;
            _packageService = packageService;
        }
        public UserDTO ValidateUser(string UserName, string Password)
        {
            var user =_userService.CheckValidation(UserName, PasswordHelper.Encrypt(Password));
            return (Mapper.Map<UserDTO>(user));
        }

        public UserDTO GetUser(long userId)
        {
            var user = _userService.Find(userId);
            return (Mapper.Map<UserDTO>(user));
        }

        public void AddUserAndPackage(UserPackageDTO userPackageDto)
        {
            var userExistence = _userService.GetUserByGUID(userPackageDto.UserAccountId);
            if(userExistence != null)
            {
                var packageOnly = new Package();
                packageOnly.Limit = userPackageDto.Limit;
                packageOnly.Start = userPackageDto.Start;
                packageOnly.End = userPackageDto.End;
                packageOnly.PackageGuid = userPackageDto.PackageGuid;
                packageOnly.UserId = userExistence.UserId;

                _packageService.Insert(packageOnly);
            }

            else
            {
                var user = new User();
                var emailValid = _userService.EmailValidation(userPackageDto.UserName);
                if (emailValid != null) throw new NotFoundException(ErrorCodes.RepeatedEmail);
                user.Name = userPackageDto.Name;
                user.UserAccountId = userPackageDto.UserAccountId;
                user.UserName = userPackageDto.UserName;
                user.Password = PasswordHelper.Encrypt(userPackageDto.Password);
                user.IsActive = userPackageDto.IsActive;
                user.UserRoleType = Enums.RoleType.GlobalAdmin;
                user.Name = userPackageDto.Name;

                var package = new Package();
                package.Limit = userPackageDto.Limit;
                package.Start = userPackageDto.Start;
                package.End = userPackageDto.End;
                package.PackageGuid = userPackageDto.PackageGuid;

                user.Packages.Add(package);
                _packageService.InsertRange(user.Packages);
                _userService.Insert(user);
            }
         
            SaveChanges();
        }

        public void UpdateUser(UserDTO userDto)
        {
            var user = _userService.GetUserByGUID(userDto.UserAccountId);
            if (user == null) throw new NotFoundException(ErrorCodes.UserNotFound);
            //var emailValid = _userService.EmailValidation(userDto.UserName);
            //if (emailValid != null) throw new NotFoundException(ErrorCodes.RepeatedEmail);
           // user.Name = userDto.Name;
           // user.UserName = userDto.UserName;
            user.Password = PasswordHelper.Encrypt(userDto.Password);
            user.IsActive = userDto.IsActive;
            _userService.Update(user);
            SaveChanges();
        }
    }
}