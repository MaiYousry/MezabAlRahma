using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MezabElRahma.BLL.DTOs
{
    public class CurrencyTranslationDTO
    {
        public long CurrencyTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; }
        public long CurrencyId { get; set; }
    }
}
