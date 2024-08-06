using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEnd.DTO
{
    public class SessionDTO
    {
        public int UserID { get; set; }
        public string? FullName { get; set; }
        public string? Email { get; set; }
        public int ProfileID { get; set; }
        public string? Token { get; set; }
    }
}
