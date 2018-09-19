using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MezabElRahma.BLL.DTOs
{
    public class HotelTranslationDTO
    {
        public long HotelTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public long HotelId { get; set; }
    }
}
