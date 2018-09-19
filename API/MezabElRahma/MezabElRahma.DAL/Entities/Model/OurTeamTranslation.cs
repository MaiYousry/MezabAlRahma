﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Pattern.Ef6;

namespace MezabElRahma.DAL.Entities.Model
{
    public class OurTeamTranslation : Entity
    {
        [Key]
        public long OurTeamTranslationId { get; set; }
        public string Language { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        [ForeignKey("OurTeam")]
        public long OurTeamId { get; set; }
        public virtual OurTeam OurTeam { get; set; }
    }
}
