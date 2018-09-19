using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace MezabElRahma.API.Models
{
    public class TemplateModel
    {
        public long TemplateId { get; set; }
        public string TemplateName { get; set; }
        public string TemplateURL { get; set; }
        public long UserId { get; set; }
        public bool TemplateIsDeleted { get; set; }
        public MemoryStream Image { get; set; }
    }
}