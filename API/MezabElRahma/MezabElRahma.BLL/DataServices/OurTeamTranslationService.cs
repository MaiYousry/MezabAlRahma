using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MezabElRahma.BLL.DataServices.Interfaces;
using MezabElRahma.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;

namespace MezabElRahma.BLL.DataServices
{
    public class OurTeamTranslationService : Service<OurTeamTranslation>, IOurTeamTranslationService
    {
        public OurTeamTranslationService(IRepositoryAsync<OurTeamTranslation> repository) : base(repository)
        {

        }
        public List<OurTeamTranslation> GetTransByOurTeamId(long ourTeamId)
        {
            var ourTeamTrans = _repository.Query().Select().Where(x => x.OurTeamId == ourTeamId).ToList();
            return ourTeamTrans;
        }
    }
}
