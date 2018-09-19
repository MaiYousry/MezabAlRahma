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
    public class ContactUs : Entity
    {
        [Key]
        public long ContactUsId { get; set; }
        public string Email { get; set; }
        public string OwnerEmail { get; set; }
        public string Location { get; set; }
        public string CompanyNumber { get; set; }
        public string WhatsAppNumber { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long CreatorUserId { get; set; }
        public bool ShowEmail { get; set; }
        public bool ShowOwnerEmail { get; set; }
        public bool ShowWhatsApp { get; set; }
        public bool ShowMobile { get; set; }
        public bool ShowFacebook { get; set; }
        public bool ShowGmail { get; set; }
        public bool ShowTwitter { get; set; }
        public string FacebookLink { get; set; }
        public string GmailLink { get; set; }
        public string TwitterLink { get; set; }
        public virtual User User { get; set; }

    }
}
