using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEnd.DTO
{
    public class DynatronUserDTO
    {
        public int UserId { get; set; }

        public string UserName { get; set; } = null!;

        public string Pwd { get; set; } = null!;

        public int? CustomerId { get; set; }

        public int? ProfileId { get; set; }
    }
}
