using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEnd.DTO
{
    public class UserProfileDTO
    {
        public int ProfileId { get; set; }

        public string ProfileName { get; set; } = null!;
    }
}
