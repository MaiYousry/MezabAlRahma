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
    public class AboutUsTranslationService : Service<AboutUsTranslation>, IAboutUsTranslationService
    {
        public AboutUsTranslationService(IRepositoryAsync<AboutUsTranslation> repository) : base(repository)
        {

        }

        public List<AboutUsTranslation> GetTransByAboutUsId(long aboutUsId)
        {
            var aboutUsTrans = _repository.Query().Select().Where(x => x.AboutUsId == aboutUsId).ToList();
            return aboutUsTrans;
        }
    }
}
