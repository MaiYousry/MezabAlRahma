using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MezabElRahma.BLL.DTOs
{
    public class HomeTranslationDTO
    {
        public long HomeTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; }
        public string ColoredTitle { get; set; }
        public string SubTitle { get; set; }
        public string Description { get; set; }
        public long HomeId { get; set; }
    }
}
