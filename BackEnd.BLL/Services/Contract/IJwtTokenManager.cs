using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEnd.BLL.Services.Contract
{
    public interface IJwtTokenManager
    {
        string GenerateToken(string userName, string password);
    }
}
