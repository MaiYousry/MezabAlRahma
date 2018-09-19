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
    public class OfferTranslation : Entity
    {
        [Key]
        public long OfferTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        [ForeignKey("Offer")]
        public long OfferId { get; set; }
        public virtual Offer Offer { get; set; }
    }
}
