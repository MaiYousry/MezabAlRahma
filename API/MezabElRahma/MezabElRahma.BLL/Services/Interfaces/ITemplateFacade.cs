using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MezabElRahma.BLL.DTOs;


namespace MezabElRahma.BLL.Services.Interfaces
{
    public interface ITemplateFacade
    {
        List<TemplateDTO> getAllTemplatesForCertainUser(long userId);
        void AddTemplate(TemplateDTO templateDto, string path);
        void DeleteTemplate(long templateId);
        PagedResultsDTO GetAllPagingTemplatesForLoggedUser(long userId, int page, int pageSize);
    }
}