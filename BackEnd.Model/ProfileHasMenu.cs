using System;
using System.Collections.Generic;

namespace BackEnd.Model;

public partial class ProfileHasMenu
{
    public int ProfileMenuId { get; set; }

    public int MenuId { get; set; }

    public int ProfileId { get; set; }
}
