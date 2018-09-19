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
    public class AboutUs : Entity
    {
        public AboutUs()
        {
            AboutUsTranslations = new List<AboutUsTranslation>();
        }
        [Key]
        public long AboutUsId { get; set; }
        [ForeignKey("Template")]
        public long? TemplateId { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; }
        public virtual ICollection<AboutUsTranslation> AboutUsTranslations { get; set; }
        public virtual Template Template { get; set; }
        public virtual User User { get; set; }
    }
}
