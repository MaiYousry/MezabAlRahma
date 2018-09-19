using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MezabElRahma.DAL.Entities.Model;
using Service.Pattern;

namespace MezabElRahma.BLL.DataServices.Interfaces
{
    public interface IUserService:IService<User>
    {
        User CheckValidation(string userName, string password);
        User EmailValidation(string email);
        User GetUserByGUID(Guid userGuid);
        User GetUserByID(long userId);
    }
}
