using MezabElRahma.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MezabElRahma.Common;

namespace MezabElRahma.BLL.DTOs
{
    public class UserPackageDTO
    {
        public long UserId { get; set; }
        public long ProductId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public bool UserIsDeleted { get; set; }
        public bool IsActive { get; set; }
        public Guid UserAccountId { get; set; }
        public string Name { get; set; }
        public Enums.RoleType UserRoleType { get; set; }

        public long PackageId { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public int Limit { get; set; }
        public Guid PackageGuid { get; set; }
        public int UserConsumer { get; set; }
    }
}
