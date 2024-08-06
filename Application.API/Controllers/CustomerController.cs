using BackEnd.BLL.Services.Contract;
using BackEnd.DTO;
using BackEnd.Utils;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerService _customerService;

        public CustomerController(ICustomerService customerService)
        {
            _customerService = customerService;
        }

        [HttpGet]
        [Route("GetCustomers")]
        public async Task<IActionResult> GetCustomer()
        {
            var response = new Response<List<DynatronCustomerDTO>>();
            try
            {
                response.status = true;
                response.value = await _customerService.GetAll();
            }
            catch (Exception ex)
            {
                response.status = false;
                response.message = ex.Message;
            }

            return Ok(response);
        }

        [HttpPost]
        [Route("UpdateCustomer")]
        public async Task<IActionResult> UpdateCustomer([FromBody] DynatronCustomerDTO customer)
        {
            var response = new Response<DynatronCustomerDTO>();
            try
            {
                response.status = true;
                response.value = await _customerService.InsertCustomer(customer);
            }
            catch (Exception ex)
            {
                response.status = false;
                response.message = ex.Message;
            }

            return Ok(response);
        }
    }
}
