using BackEnd.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEnd.BLL.Services.Contract
{
    public interface ICustomerService
    {
        Task<List<DynatronCustomerDTO>> GetAll();

        Task<DynatronCustomerDTO> InsertCustomer(DynatronCustomerDTO model);

        Task<DynatronCustomerDTO> UpdateCustomer(DynatronCustomerDTO model);
    }
}
