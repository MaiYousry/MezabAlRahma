using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MezabElRahma.API.Models
{
    public class CurrencyTranslationModel
    {
        public long CurrencyTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; }
        public long CurrencyId { get; set; }
    }
}