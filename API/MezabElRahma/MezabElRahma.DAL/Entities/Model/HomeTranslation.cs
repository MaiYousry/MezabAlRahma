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
    public class HomeTranslation : Entity
    {
        [Key]
        public long HomeTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; }
        public string ColoredTitle { get; set; }
        public string SubTitle { get; set; }
        public string Description { get; set; }
        [ForeignKey("Home")]
        public long HomeId { get; set; }
        public virtual Home Home { get; set; }
    }
}
