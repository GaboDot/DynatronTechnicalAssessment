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
    public class MenuController : ControllerBase
    {
        private readonly IMenuService _menuService;

        public MenuController(IMenuService menuService)
        {
            _menuService = menuService;
        }

        [HttpGet]
        [Route("GetMenu")]
        public async Task<IActionResult> GetUserMenu(int profileID)
        {
            var response = new Response<List<MenuDTO>>();
            try
            {
                response.status = true;
                response.value = await _menuService.CreateMenu(profileID);
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
