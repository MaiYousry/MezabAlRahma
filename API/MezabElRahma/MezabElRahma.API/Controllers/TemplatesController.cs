using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;
using System.Web.Hosting;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.Script.Serialization;
using AutoMapper;
using MezabElRahma.API.Infrastructure;
using MezabElRahma.API.Models;
using MezabElRahma.API.Providers;
using MezabElRahma.BLL.DTOs;
using MezabElRahma.BLL.Services.Interfaces;
using MezabElRahma.Common;
using MezabElRahma.Common.CustomException;
using static System.Web.Hosting.HostingEnvironment;

namespace MezabElRahma.API.Controllers
{
    public class TemplatesController : BaseApiController
    {
        private ITemplateFacade _templateFacade;

        public TemplatesController(ITemplateFacade templateFacade)
        {
            _templateFacade = templateFacade;
        }

        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/Templates", Name = "GetAllTemplates")]
        [HttpGet]
        [ResponseType(typeof(List<TemplateModel>))]
        public IHttpActionResult GetAllTemplates()
        {
            var templates = Mapper.Map<List<TemplateModel>>(_templateFacade.getAllTemplatesForCertainUser(UserId));

            foreach (var item in templates)
            {
                item.TemplateURL = Url.Link("GetTemplateImage", new { item.TemplateId });
            }

            return Ok(templates);

        }

        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/TemplatesPaging", Name = "GetAllPagingTemplates")]
        [HttpGet]
        [ResponseType(typeof(IEnumerable<TemplateModel>))]
        public IHttpActionResult GetAllPagingTemplates(int page = Page, int pagesize = PageSize)
        {
            var contacts = _templateFacade.GetAllPagingTemplatesForLoggedUser(UserId, page, pagesize);
            var data = Mapper.Map<List<TemplateModel>>(contacts.Data);

            foreach (var item in data)
            {
                item.TemplateURL = Url.Link("GetTemplateImage", new { item.TemplateId });
            }

            return PagedResponse("GetAllPagingTemplates", page, pagesize, contacts.TotalCount, data, true);
        }

        [Route("api/Templates/{TemplateId:long}/Image", Name = "GetTemplateImage")]
        [HttpGet]
        public HttpResponseMessage GetTemplateImage(long templateId)
        {
            try
            {
                string filePath = Directory.GetFiles(MapPath("~/TemplatesImages"))
                    .FirstOrDefault(x => Path.GetFileName(x).Contains(templateId.ToString()));


                HttpResponseMessage Response = new HttpResponseMessage(HttpStatusCode.OK);

                byte[] fileData = File.ReadAllBytes(filePath);

                Response.Content = new ByteArrayContent(fileData);
                Response.Content.Headers.ContentType = new MediaTypeHeaderValue("image/png");

                return Response;
            }
            catch (Exception e)
            {
                return new HttpResponseMessage();
            }
        }

        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/Templates", Name = "AddTemplate")]
        [HttpPost]
        public IHttpActionResult AddTemplate()
        {
            if (!HttpContext.Current.Request.Files.AllKeys.Any())
                throw new ValidationException(ErrorCodes.EmptyTemplateImage);

            var httpPostedFile = HttpContext.Current.Request.Files[0];

            var templateModel = new JavaScriptSerializer().Deserialize<TemplateModel>(HttpContext.Current.Request.Form.Get(0));

            if (httpPostedFile == null)
                throw new ValidationException(ErrorCodes.EmptyTemplateImage);

            if (httpPostedFile.ContentLength > 2 * 1024 * 1000)
                throw new ValidationException(ErrorCodes.ImageExceedSize);


            if (Path.GetExtension(httpPostedFile.FileName).ToLower() != ".jpg" &&
                Path.GetExtension(httpPostedFile.FileName).ToLower() != ".png" &&
                Path.GetExtension(httpPostedFile.FileName).ToLower() != ".jpeg")

                throw new ValidationException(ErrorCodes.InvalidImageType);

            var templateDto = Mapper.Map<TemplateDTO>(templateModel);

            templateDto.Image = new MemoryStream();
            httpPostedFile.InputStream.CopyTo(templateDto.Image);
            templateDto.UserId = UserId;
            _templateFacade.AddTemplate(templateDto, MapPath("~/TemplatesImages"));
            return Ok();
        }

        //[AuthorizeRoles(Enums.RoleType.GlobalAdmin)]
        [Route("api/Templates/{templateId:long}", Name = "DeleteTemplate")]
        [HttpDelete]
        public IHttpActionResult DeleteTemplate(long templateId)
        {
            _templateFacade.DeleteTemplate(templateId);
            return Ok();
        }
    }
}
