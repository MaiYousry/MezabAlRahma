using MezabElRahma.Common;
using Repository.Pattern.Ef6;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MezabElRahma.DAL.Entities.Model
{
    public class User : Entity
    {
        public User()
        {
            Packages = new List<Package>();
        }
        public long UserId { get; set; }
        public Guid UserAccountId { get; set; }
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Password { get; set; }
        public bool UserIsDeleted { get; set; }
        public bool IsActive { get; set; }
        public Enums.RoleType UserRoleType { get; set; }
        public virtual ICollection<Package> Packages { get; set; }

    }
}
