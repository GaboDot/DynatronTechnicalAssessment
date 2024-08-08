using AutoMapper;
using BackEnd.DTO;
using BackEnd.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEnd.Utility
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<DynatronCustomer, DynatronCustomerDTO>().ReverseMap();
            CreateMap<DynatronUser, DynatronUserDTO>().ReverseMap();
            CreateMap<Menu, MenuDTO>().ReverseMap();
        }
    }
}
