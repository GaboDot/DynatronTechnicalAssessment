using AutoMapper;
using BackEnd.BLL.Services.Contract;
using BackEnd.DAL.Repositories.Contract;
using BackEnd.DTO;
using BackEnd.Model;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.BLL.Services
{
    public class CustomerService: ICustomerService
    {
        private readonly IGenericRepository<DynatronCustomer> _repo;
        private readonly IMapper _mapper;

        public CustomerService(IGenericRepository<DynatronCustomer> repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        public async Task<List<DynatronCustomerDTO>> GetAll()
        {
            try
            {
                var queryCustomers = await _repo.Query();
                var customersList = queryCustomers.ToList();

                return _mapper.Map<List<DynatronCustomerDTO>>(customersList);
            }
            catch (Exception) { throw; }
        }

        public async Task<DynatronCustomerDTO> InsertCustomer(DynatronCustomerDTO model)
        {
            try
            {
                model.CreatedDate = DateTime.Now;
                var customerCreate = await _repo.Insert(_mapper.Map<DynatronCustomer>(model));
                if (customerCreate.CustomerId == 0)
                    throw new TaskCanceledException("Unable to create Customer");

                var query = await _repo.Query(c => c.CustomerId == customerCreate.CustomerId);
                customerCreate = query.Include(user => user.UserId).First();
                return _mapper.Map<DynatronCustomerDTO>(customerCreate);
            }
            catch(Exception) { throw; }
        }

        public async Task<bool> UpdateCustomer(DynatronCustomerDTO model)
        {
            try
            {
                var customerModel = _mapper.Map<DynatronCustomer>(model);

                //Coalesce
                var foundCustomer = await _repo.Get(c => c.CustomerId == customerModel.CustomerId) ?? throw new TaskCanceledException($"Customer {customerModel.CustomerId} does not exist");

                /* Extended validation - replaced by Coalesce
                var foundCustomer = await _repo.Get(c => c.CustomerId == customerModel.CustomerId);
                if (foundCustomer == null)
                    throw new TaskCanceledException($"Customer {customerModel.CustomerId} does not exist");
                */

                foundCustomer.FirstName = model.FirstName;
                foundCustomer.LastName = model.LastName;
                foundCustomer.Email = model.Email;
                foundCustomer.Status = model.Status;
                foundCustomer.UpdatedDate = DateTime.Now;

                bool result = await _repo.Update(foundCustomer);
                if (!result)
                    throw new TaskCanceledException($"Customer: {customerModel.CustomerId}\nUnable to update customer information.");

                return result;
            }
            catch(Exception) { throw; }
        }
    }
}
