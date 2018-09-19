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
    public class HomeService : Service<Home>, IHomeService
    {
        public HomeService(IRepositoryAsync<Home> repository) : base(repository)
        {

        }

        public List<Home> HomesPaging(long userId)
        {
            var homes = _repository.Query(x => x.CreatorUserId == userId && !x.IsDeleted).Select().ToList();
            return homes;
        }
        public PagedResultsDTO GetAllHomesForCertainUser(long userId, int page, int pageSize)
        {
            PagedResultsDTO results = new PagedResultsDTO();
            results.TotalCount = _repository.Queryable().Count(x => !x.IsDeleted && x.CreatorUserId == userId);
            results.Data = Mapper.Map<List<Home>, List<HomeDTO>>(_repository.Query(x => !x.IsDeleted && x.CreatorUserId == userId).Select().OrderBy(x => x.HomeId).Skip((page - 1) * pageSize)
                .Take(pageSize).ToList());
            return results;
        }

        public Home GetHome()
        {
            var home = _repository.Query().Select().FirstOrDefault(x=>!x.IsDeleted && x.CreatorUserId == 1);
            return home;
        }

        public Home relationTempHome(long templateId)
        {
            var check = _repository.Query(x => x.IsDeleted != true && x.TemplateId == templateId).Select().FirstOrDefault();
            return check;
        }
    }
}
