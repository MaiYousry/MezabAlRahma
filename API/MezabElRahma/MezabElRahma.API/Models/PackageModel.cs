using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MezabElRahma.API.Models
{
    public class PackageModel
    {
        public long PackageId { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public int Limit { get; set; }
        public Guid PackageGuid { get; set; }
        public int UserConsumer { get; set; }
        public long UserId { get; set; }
    }
}