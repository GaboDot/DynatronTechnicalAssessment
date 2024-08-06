using System;
using System.Collections.Generic;

namespace BackEnd.Model;

public partial class DynatronCustomer
{
    public int CustomerId { get; set; }

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string Email { get; set; } = null!;

    public bool Status { get; set; }

    public DateTime CreatedDate { get; set; }

    public DateTime UpdatedDate { get; set; }

    public int? UserId { get; set; }
}
