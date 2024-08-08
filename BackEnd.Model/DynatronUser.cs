using System;
using System.Collections.Generic;

namespace BackEnd.Model;

public partial class DynatronUser
{
    public int UserId { get; set; }

    public string UserName { get; set; } = null!;

    public string Pwd { get; set; } = null!;

    public int? CustomerId { get; set; }

    public int? ProfileId { get; set; }
}
