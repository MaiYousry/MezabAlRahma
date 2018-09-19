using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Repositories;
using Service.Pattern;
using AutoMapper;
using MezabElRahma.BLL.DataServices.Interfaces;
using MezabElRahma.BLL.DTOs;
using MezabElRahma.DAL.Entities.Model;

namespace MezabElRahma.BLL.DataServices
{
    public class TemplateService : Service<Template>, ITemplateService
    {
        public TemplateService(IRepositoryAsync<Template> repository) : base(repository)
        {
        }

        public List<Template> GetAllTemplate(long userId)
        {
            //***********************
            //userID 15 is the admin user
            //whenever he add a template, 
            //it will be shared all over the other accounts
            //*********************
            var templates = _repository.Query(x => x.TemplateIsDeleted != true && x.UserId == userId).Select().ToList();
            return templates;
        }

        public PagedResultsDTO GetAllTemplatesForCertainUser(long userId, int page, int pageSize)
        {
            PagedResultsDTO results = new PagedResultsDTO();
            results.TotalCount = _repository.Queryable().Count(x => !x.TemplateIsDeleted && x.UserId == userId); //&& x.UserID == userID
             //&& x.UserID == userID
            results.Data = Mapper.Map<List<Template>, List<TemplateDTO>>(_repository.Query(x => !x.TemplateIsDeleted && x.UserId == userId).Select().OrderBy(x => x.TemplateId).Skip((page - 1) * pageSize)
                .Take(pageSize).ToList());
            return results;
        }

    }

}
