using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace MezabElRahma.DAL.Entities.Model
{
    public class Currency : Entity
    {
        public Currency()
        {
            CurrencyTranslations = new List<CurrencyTranslation>();
        }
        [Key]
        public long CurrencyId { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; }
        public virtual User User { get; set; }
        public virtual ICollection<CurrencyTranslation> CurrencyTranslations { get; set; }
    }
}
