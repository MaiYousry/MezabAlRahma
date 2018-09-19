using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using MezabElRahma.BLL.DataServices.Interfaces;
using MezabElRahma.BLL.DTOs;
using MezabElRahma.BLL.Services.Interfaces;
using MezabElRahma.Common.CustomException;
using MezabElRahma.DAL.Entities.Model;
using Repository.Pattern.UnitOfWork;

namespace MezabElRahma.BLL.Services
{
    public class OurTeamFacade : BaseFacade, IOurTeamFacade
    {
        private IOurTeamService _ourTeamService;
        private IOurTeamTranslationService _ourTeamTranslationService;

        public OurTeamFacade(IOurTeamService ourTeamService, IOurTeamTranslationService ourTeamTranslationService, IUnitOfWorkAsync unitOfWork) : base(unitOfWork)
        {
            _ourTeamService = ourTeamService;
            _ourTeamTranslationService = ourTeamTranslationService;
        }
        public PagedResultsDTO GetAllPagingOurTeamsForLoggedUser(long userId, int page, int pageSize)
        {
            var ourTeams = _ourTeamService.GetAllOurTeamsForCertainUser(userId, page, pageSize);
            return ourTeams;
        }
        public List<OurTeamDTO> GetOurTeam()
        {
            var ourTeam = _ourTeamService.GetOurTeam();
            return Mapper.Map<List<OurTeamDTO>>(ourTeam);
        }
        public void DeleteOurTeam(long ourTeamId)
        {
            var ourTeam = _ourTeamService.Find(ourTeamId);
            if (ourTeam == null) throw new NotFoundException(ErrorCodes.OurTeamNotFound);
            ourTeam.IsDeleted = true;
            _ourTeamService.Update(ourTeam);
            SaveChanges();
        }

        public void AddOurTeam(OurTeamDTO ourTeamDto, long userId)
        {
            var ourTeam = new OurTeam();

            ourTeam.CreationTime = DateTime.Now;
            ourTeam.CreatorUserId = userId;
            ourTeam.IsDeleted = false;
            ourTeam.IsMain = ourTeamDto.IsMain;
            ourTeam.TemplateId = ourTeamDto.TemplateId;


            _ourTeamService.Insert(ourTeam);

            var ourTeamTrans = new OurTeamTranslation();
            ourTeamTrans.Language = "en";
            ourTeamTrans.Title = ourTeamDto.TitleDictionary["en"];
            ourTeamTrans.Description = ourTeamDto.DescriptionDictionary["en"];
            ourTeamTrans.OurTeamId = ourTeam.OurTeamId;
            _ourTeamTranslationService.Insert(ourTeamTrans);
            SaveChanges();

            ourTeamTrans.Language = "ar";
            ourTeamTrans.Title = ourTeamDto.TitleDictionary["ar"];
            ourTeamTrans.Description = ourTeamDto.DescriptionDictionary["ar"];
            ourTeamTrans.OurTeamId = ourTeam.OurTeamId;
            _ourTeamTranslationService.Insert(ourTeamTrans);
            SaveChanges();
        }

        public void UpdateOurTeam(long userId, OurTeamDTO ourTeamDto)
        {
            var ourTeam = _ourTeamService.Find(ourTeamDto.OurTeamId);
            if (ourTeam == null) throw new NotFoundException(ErrorCodes.OurTeamNotFound);

            ourTeam.LastModificationTime = DateTime.Now;
            ourTeam.LastModifierUserId = userId;
            ourTeam.IsMain = ourTeamDto.IsMain;
            ourTeam.TemplateId = ourTeamDto.TemplateId;

            _ourTeamService.Update(ourTeam);

            var ourTeamTrans = _ourTeamTranslationService.GetTransByOurTeamId(ourTeam.OurTeamId);

            for (int i = 0; i < 2; i++)
            {
                if (ourTeamTrans[i].Language == "en")
                {
                    ourTeamTrans[i].Title = ourTeamDto.TitleDictionary["en"];
                    ourTeamTrans[i].Description = ourTeamDto.DescriptionDictionary["en"];
                    SaveChanges();
                }
                else if (ourTeamTrans[i].Language == "ar")
                {
                    ourTeamTrans[i].Title = ourTeamDto.TitleDictionary["ar"];
                    ourTeamTrans[i].Description = ourTeamDto.DescriptionDictionary["ar"];
                    SaveChanges();
                }
            }
            SaveChanges();
        }
    }
}