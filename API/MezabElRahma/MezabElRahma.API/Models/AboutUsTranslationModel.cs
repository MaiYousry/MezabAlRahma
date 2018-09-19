using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MezabElRahma.API.Models
{
    public class AboutUsTranslationModel
    {
        public long AboutUsTranslationId { get; set; }
        public string Language { get; set; }
        public string Header { get; set; }
        public string Title { get; set; }
        public string TitleColored { get; set; }
        public string SubTitle { get; set; }
        public string Description { get; set; }
        public string BoldArticle { get; set; }
        public long AboutUsId { get; set; }
    }
}