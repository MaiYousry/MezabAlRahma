using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using MezabElRahma.BLL.DataServices.Interfaces;
using MezabElRahma.BLL.DTOs;
using MezabElRahma.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;


namespace MezabElRahma.BLL.DataServices
{
    public class HomeTranslationService : Service<HomeTranslation>, IHomeTranslationService
    {
        public HomeTranslationService(IRepositoryAsync<HomeTranslation> repository) : base(repository)
        {

        }
        public List<HomeTranslation> GetTransByHomeId(long homeId)
        {
            var homeTrans = _repository.Query().Select().Where(x => x.HomeId == homeId).ToList();
            return homeTrans;
        }
    }
}
