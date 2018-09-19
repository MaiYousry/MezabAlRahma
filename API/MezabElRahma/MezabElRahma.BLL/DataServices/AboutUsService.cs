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
    public class AboutUsService : Service<AboutUs>, IAboutUsService
    {
        public AboutUsService(IRepositoryAsync<AboutUs> repository) : base(repository)
        {
        }

        public AboutUs GetAboutUs()
        {
            var aboutUs = _repository.Query(x => x.IsDeleted != true && x.CreatorUserId == 1).Select().FirstOrDefault();
            return aboutUs;
        }

        public List<AboutUs> AboutUsesPaging(long userId)
        {
            var aboutUses = _repository.Query(x => x.CreatorUserId == userId).Select().ToList();
            return aboutUses;
        }
        public PagedResultsDTO GetAllAboutUsesForCertainUser(long userId, int page, int pageSize)
        {
            PagedResultsDTO results = new PagedResultsDTO();
            results.TotalCount = _repository.Queryable().Count(x => !x.IsDeleted && x.CreatorUserId == userId);
            results.Data = Mapper.Map<List<AboutUs>, List<AboutUsDTO>>(_repository.Query(x => !x.IsDeleted && x.CreatorUserId == userId).Select().OrderBy(x => x.AboutUsId).Skip((page - 1) * pageSize)
                .Take(pageSize).ToList());
            return results;
        }

        public AboutUs relationTempAbout(long templateId)
        {
            var check = _repository.Query(x => x.IsDeleted != true && x.TemplateId == templateId).Select().FirstOrDefault();
            return check;
        }
    }
}
