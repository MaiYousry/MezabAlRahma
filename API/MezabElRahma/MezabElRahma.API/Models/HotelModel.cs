using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MezabElRahma.API.Models
{
    public class HotelModel
    {
        public long HotelId { get; set; }
        public int? Rate { get; set; }
        public long? CurrencyTypeId { get; set; }
        public long? TemplateId { get; set; }
        public long? Price { get; set; }
        public bool? IsMain { get; set; }
        public bool? IsDeleted { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public long? DeleterUserId { get; set; }
        public List<HotelTranslationModel> HotelTranslations { get; set; }
        public Dictionary<string, string> TitleDictionary { get; set; }
        public Dictionary<string, string> DescriptionDictionary { get; set; }
    }
}