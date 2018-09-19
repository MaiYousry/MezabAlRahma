using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MezabElRahma.API.Models
{
    public class ContactUsModel
    {
        public long ContactUsId { get; set; }
        public string OwnerEmail { get; set; }
        public string Email { get; set; }
        public string Location { get; set; }
        public string WhatsAppNumber { get; set; }
        public string CompanyNumber { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
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
    }
}