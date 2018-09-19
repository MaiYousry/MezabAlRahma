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
    public class CurrencyTranslation : Entity
    {
        [Key]
        public long CurrencyTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; }
       // public string Description { get; set; }
        [ForeignKey("Currency")]
        public long CurrencyId { get; set; }
        public virtual Currency Currency { get; set; }
    }
}
