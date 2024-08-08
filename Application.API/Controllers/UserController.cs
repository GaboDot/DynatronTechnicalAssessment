using BackEnd.BLL.Services;
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
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IJwtTokenManager _jwtTokenManager;

        public UserController(IUserService userService, IJwtTokenManager jwtTokenManager)
        {
            _userService = userService;
            _jwtTokenManager = jwtTokenManager;
        }

        [AllowAnonymous]
        [HttpPost("Authenticate")]
        public async Task<IActionResult> Login([FromBody] LoginDTO login)
        {
            var isLoggedIn = await _userService.ValidateCredentials(login.Email, login.Password);
            var response = new Response<SessionDTO>();
            
            if (isLoggedIn != null)
            {
                try
                {
                    var token = _jwtTokenManager.GenerateToken(login.Email, login.Password);
                    isLoggedIn.Token = token;
                    
                    response.status = true;
                    response.value = isLoggedIn;
                }
                catch (Exception ex)
                {
                    response.status = false;
                    response.message = ex.Message;
                }
            }
            else
                response.status = false;

            return Ok(response);
        }

        [HttpGet]
        [Route("GetUsers")]
        public async Task<IActionResult> GetUsers()
        {
            var response = new Response<List<DynatronUserDTO>>();
            try
            {
                response.status = true;
                response.value = await _userService.GetAll();
            }
            catch (Exception ex)
            {
                response.status = false;
                response.message = ex.Message;
            }

            return Ok(response);
        }

        [HttpPost]
        [Route("UpdatePassword")]
        public async Task<IActionResult> UpdatePassword([FromBody] DynatronUserDTO user)
        {
            var response = new Response<bool>();
            try
            {
                response.status = true;
                response.value = await _userService.UpdateUser(user);
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
