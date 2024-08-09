using System;
using System.Collections.Generic;

namespace BackEnd.Model;

public partial class Menu
{
    public int MenuId { get; set; }

    public string MenuText { get; set; } = null!;

    public string? MenuIcon { get; set; }

    public string? MenuLink { get; set; }

    public short ParentMenu { get; set; }

    public bool? MenuStatus { get; set; }
}
