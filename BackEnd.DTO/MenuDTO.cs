using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEnd.DTO
{
    public class MenuDTO
    {
        public int MenuId { get; set; }

        public string MenuText { get; set; } = null!;

        public string? MenuIcon { get; set; }

        public string? MenuLink { get; set; }

        public short ParentMenu { get; set; }

        public List<MenuDTO> SubMenus { get; set; } = null!;
    }
}
