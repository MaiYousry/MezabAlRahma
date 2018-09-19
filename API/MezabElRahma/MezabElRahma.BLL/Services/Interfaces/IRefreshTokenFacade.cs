using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MezabElRahma.BLL.DTOs;

namespace MezabElRahma.BLL.Services.Interfaces
{
    public interface IRefreshTokenFacade
    {
        RefreshTokenDto FindRefreshTokenNotExpired(string userName);
        bool AddRefreshToken(RefreshTokenDto token);
    }
}
