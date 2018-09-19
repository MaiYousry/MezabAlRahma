using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MezabElRahma.Common;

namespace MezabElRahma.API.Models
{
    public class UserModel
    {
        public long UserId { get; set; }
        public Guid UserAccountId { get; set; }
        public string UserName { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public bool UserIsDeleted { get; set; }
        public bool IsActive { get; set; }
        public DateTime CreatorTime { get; set; }
        public DateTime ModifiedTime { get; set; }
        public DateTime DeletionTime { get; set; }
        public Enums.RoleType UserRoleType { get; set; }

    }
}