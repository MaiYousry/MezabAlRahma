using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MezabElRahma.API.Models
{
    public class OfferTranslationModel
    {
        public long OfferTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public long OfferId { get; set; }
    }
}