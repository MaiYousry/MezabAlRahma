using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace MezabElRahma.DAL.Entities.Model
{
    public class AboutUsTranslation : Entity
    {
        [Key]
        public long AboutUsTranslationId { get; set; }
        public string Language { get; set; }
        public string Header { get; set; }
        public string Title { get; set; }
        public string TitleColored { get; set; }
        public string SubTitle { get; set; }
        public string BoldArticle { get; set; }
        public string Description { get; set; }
        [ForeignKey("AboutUs")]
        public long AboutUsId { get; set; }
        public virtual AboutUs AboutUs { get; set; }
    }
}
