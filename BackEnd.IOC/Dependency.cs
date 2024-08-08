using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using BackEnd.DAL.Repositories;
using BackEnd.DAL.Repositories.Contract;
using BackEnd.DAL.DataBaseContext;
using BackEnd.BLL.Services.Contract;
using BackEnd.BLL.Services;
using BackEnd.Utility;

namespace BackEnd.IOC
{
    public static class Dependency
    {
        public static void InjectDependencies(this IServiceCollection services, IConfiguration config)
        {
            services.AddDbContext<DynatronContext>(options =>
            {
                options.UseSqlServer(config.GetConnectionString("DynatronSQL"));
            });

            //Repositories
            services.AddTransient(typeof(IGenericRepository<>), typeof(GenericRepository<>));

            //AutoMapper
            services.AddAutoMapper(typeof(AutoMapperProfile));

            //Services
            services.AddScoped<IJwtTokenManager, JwtTokenManager>();
            services.AddScoped<ICustomerService, CustomerService>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IMenuService, MenuService>();
        }
    }
}
