using System;
using System.Collections.Generic;

namespace BackEnd.Model;

public partial class UserProfile
{
    public int ProfileId { get; set; }

    public string ProfileName { get; set; } = null!;
}
