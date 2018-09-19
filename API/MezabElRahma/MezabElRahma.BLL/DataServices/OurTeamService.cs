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
    public class OurTeamService : Service<OurTeam>, IOurTeamService
    {
        public OurTeamService(IRepositoryAsync<OurTeam> repository) : base(repository)
        {

        }

        public List<OurTeam> OurTeamsPaging(long userId)
        {
            var ourTeams = _repository.Query(x => x.CreatorUserId == userId).Select().ToList();
            return ourTeams;
        }
        public PagedResultsDTO GetAllOurTeamsForCertainUser(long userId, int page, int pageSize)
        {
            PagedResultsDTO results = new PagedResultsDTO();
            results.TotalCount = _repository.Queryable().Count(x => !x.IsDeleted && x.CreatorUserId == userId);
            results.Data = Mapper.Map<List<OurTeam>, List<OurTeamDTO>>(_repository.Query(x => !x.IsDeleted && x.CreatorUserId == userId).Select().OrderBy(x => x.OurTeamId).Skip((page - 1) * pageSize)
                .Take(pageSize).ToList());
            return results;
        }
        public List<OurTeam> GetOurTeam()
        {
            var ourTeam = _repository.Query().Select().Where(x => !x.IsDeleted && x.CreatorUserId == 1).ToList();
            return ourTeam;
        }

        public OurTeam relationTempOurTeam(long templateId)
        {
            var check = _repository.Query(x => x.IsDeleted != true && x.TemplateId == templateId).Select().FirstOrDefault();
            return check;
        }
    }
}
