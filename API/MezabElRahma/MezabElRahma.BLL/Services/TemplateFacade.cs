using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;
using Repository.Pattern.UnitOfWork;
using System.Configuration;
using MezabElRahma.BLL.DataServices.Interfaces;
using MezabElRahma.BLL.DTOs;
using MezabElRahma.BLL.Services;
using MezabElRahma.BLL.Services.Interfaces;
using MezabElRahma.BLL.Services.ManageStorage;
using MezabElRahma.Common.CustomException;
using MezabElRahma.DAL.Entities.Model;


namespace MezabElRahma.BLL.Services
{
    public class TemplateFacade : BaseFacade, ITemplateFacade
    {
        private readonly ITemplateService _templateService;
        private readonly IAboutUsService _aboutUsService;
        private readonly IOurTeamService _ourTeamService;
        private readonly IHomeService _homeService;
        private IManageStorage _manageStorage;

        public TemplateFacade(ITemplateService templateService, IOurTeamService ourTeamService, IHomeService homeService, IAboutUsService aboutUsService, IManageStorage manageStorage, IUnitOfWorkAsync unitOfWork) : base(unitOfWork)
        {
            _templateService = templateService;
            _aboutUsService = aboutUsService;
            _homeService = homeService;
            _ourTeamService = ourTeamService;
            _manageStorage = manageStorage;
        }

        public PagedResultsDTO GetAllPagingTemplatesForLoggedUser(long userId, int page, int pageSize)
        {
            var templates = _templateService.GetAllTemplatesForCertainUser(userId, page, pageSize);

            return templates;
        }

        public List<TemplateDTO> getAllTemplatesForCertainUser(long userId)
        {
            var templates = _templateService.GetAllTemplate(userId);
            return Mapper.Map<List<TemplateDTO>>(templates);
        }

        public void AddTemplate(TemplateDTO templateDto, string path)
        {
            var template = Mapper.Map<Template>(templateDto);
            _templateService.Insert(template);
            SaveChanges();
            
            _manageStorage.UploadImage(path, templateDto.Image, template.TemplateId.ToString());
        }

        public void DeleteTemplate(long templateId)
        {
            if (templateId == 27) throw new NotFoundException(ErrorCodes.CannotDeleteLogo);

            var templateRelAboutUs = _aboutUsService.relationTempAbout(templateId);
            if(templateRelAboutUs != null) throw new NotFoundException(ErrorCodes.TemplateHasRelationWithAboutUs);

            var templateRelHome = _homeService.relationTempHome(templateId);
            if (templateRelHome != null) throw new NotFoundException(ErrorCodes.TemplateHasRelationWithHome);

            var templateRelLeaderShip = _ourTeamService.relationTempOurTeam(templateId);
            if (templateRelLeaderShip != null) throw new NotFoundException(ErrorCodes.TemplateHasRelationWithOurTeam);
            
            var template = _templateService.Find(templateId);
            if (template == null) throw new NotFoundException(ErrorCodes.TemplateNotFound);

            template.TemplateIsDeleted = true;
            _templateService.Update(template);
            SaveChanges();
        }


    }
}