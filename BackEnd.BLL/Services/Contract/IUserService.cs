using BackEnd.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEnd.BLL.Services.Contract
{
    public interface IUserService
    {
        Task<List<DynatronUserDTO>> GetAll();

        Task<SessionDTO> ValidateCredentials(string email, string pwd);

        Task<DynatronUserDTO> CreateUser(DynatronUserDTO model);

        Task<bool> UpdateUser(DynatronUserDTO model);
    }
}
