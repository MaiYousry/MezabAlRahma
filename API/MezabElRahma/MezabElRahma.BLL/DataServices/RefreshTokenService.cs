using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MezabElRahma.DAL.Entities.Model;
using MezabElRahma.BLL.DataServices;
using MezabElRahma.BLL.DataServices.Interfaces;
using Repository.Pattern.Repositories;
using Service.Pattern;

namespace MezabElRahma.BLL.DataServices
{
    public class RefreshTokenService : Service<RefreshToken>, IRefreshTokenService
    {
        private readonly IRepositoryAsync<RefreshToken> _repository;

        public RefreshTokenService(IRepositoryAsync<RefreshToken> repository) : base(repository)
        {
            _repository = repository;
        }
    }
}
