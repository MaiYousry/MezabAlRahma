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
    public class Template :Entity
    {
        [Key]
        public long TemplateId { get; set; }
        public string TemplateName { get; set; }
        [ForeignKey("User")]
        public long UserId { get; set; }
        public bool TemplateIsDeleted { get; set; }
        public virtual User User { get; set; }
        //public virtual Home Home { get; set; }
        //public virtual Hotel Hotel { get; set; }
        //public virtual Offer Offer { get; set; }
        //public virtual OurTeam OurTeam { get; set; }
    }
}
