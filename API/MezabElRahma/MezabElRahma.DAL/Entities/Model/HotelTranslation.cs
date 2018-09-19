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
    public class HotelTranslation : Entity
    {
        [Key]
        public long HotelTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        [ForeignKey("Hotel")]
        public long HotelId { get; set; }
        public virtual Hotel Hotel { get; set; }
    }
}
