using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MezabElRahma.BLL.DTOs;

namespace MezabElRahma.BLL.Services.Interfaces
{
    public interface IUserFacade
    {
        UserDTO ValidateUser(string UserName, string Password);
        UserDTO GetUser(long userId);
        void AddUserAndPackage(UserPackageDTO userPackageDto);
        void UpdateUser(UserDTO userDto);
    }
}