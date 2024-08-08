using AutoMapper;
using BackEnd.BLL.Services.Contract;
using BackEnd.DAL.Repositories.Contract;
using BackEnd.DTO;
using BackEnd.Model;
using BackEnd.Utils;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEnd.BLL.Services
{
    public class UserService: IUserService
    {
        private readonly IGenericRepository<DynatronUser> _repo;
        private readonly IGenericRepository<DynatronCustomer> _customerRepo;
        private readonly IMapper _mapper;
        private readonly IConfiguration _config;
        string hashed = "";

        public UserService(IGenericRepository<DynatronUser> repo, IMapper mapper,
            IGenericRepository<DynatronCustomer> customerRepo, IConfiguration config)
        {
            _repo = repo;
            _customerRepo = customerRepo;
            _mapper = mapper;
            _config = config;
        }
        public async Task<List<DynatronUserDTO>> GetAll()
        {
            try
            {
                var queryCustomers = await _repo.Query();
                var customersList = queryCustomers.ToList();

                return _mapper.Map<List<DynatronUserDTO>>(customersList);
            }
            catch (Exception) { throw; }
        }

        public async Task<SessionDTO> ValidateCredentials(string email, string pwd)
        {
            try
            {
                hashed = HashPassword.CreateSHAHash(pwd, _config.GetSection("JwtConfig").GetSection("Secret").Value!);
                var queryUsuario = await _repo.Query(u =>
                                        u.UserName == email &&
                                        u.Pwd == hashed
                                    );
                if (queryUsuario.FirstOrDefault() == null)
                    throw new TaskCanceledException("Invalid credentials.");
                
                var authenticatedUser = queryUsuario.FirstOrDefault();

                SessionDTO loggedIn = new SessionDTO();
                loggedIn.Email = authenticatedUser!.UserName;
                loggedIn.UserID = authenticatedUser.UserId;
                loggedIn.ProfileID = authenticatedUser.ProfileId!.Value;

                var userData = (await _customerRepo.Query(c => c.Email == loggedIn.Email)).FirstOrDefault()!;
                loggedIn.FullName = string.Concat(userData.FirstName, " ", userData.LastName);

                return loggedIn;
            }
            catch (Exception)
            { return null!; }
        }

        public async Task<DynatronUserDTO> CreateUser(DynatronUserDTO model)
        {
            try
            {
                var userCreate = await _repo.Insert(_mapper.Map<DynatronUser>(model));
                if (userCreate.CustomerId == 0)
                    throw new TaskCanceledException("Unable to create Customer");

                var query = await _repo.Query(u => u.UserId == userCreate.UserId);
                userCreate = query.Include(c => c.CustomerId).First();
                return _mapper.Map<DynatronUserDTO>(userCreate);
            }
            catch (Exception) { throw; }
        }


        public async Task<bool> UpdateUser(DynatronUserDTO model)
        {
            try
            {
                var userModel = _mapper.Map<DynatronCustomer>(model);
                //Coalesce
                var foundUser = await _repo.Get(c => c.CustomerId == userModel.CustomerId) ?? throw new TaskCanceledException($"User {userModel.CustomerId} does not exist");

                /* Extended validation - replaced by Coalesce
                var foundCustomer = await _repo.Get(c => c.CustomerId == customerModel.CustomerId);
                if (foundCustomer == null)
                    throw new TaskCanceledException($"Customer {customerModel.CustomerId} does not exist");
                */

                foundUser.Pwd = model.Pwd;

                bool result = await _repo.Update(foundUser);
                if (!result)
                    throw new TaskCanceledException($"User: {userModel.CustomerId}\nUnable to update user information.");

                return result;
            }
            catch (Exception) { throw; }
        }
    }
}
