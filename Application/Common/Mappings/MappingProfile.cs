using Application.Categories.Queries;
using Application.CustomerDemographics.Queries;
using Application.Customers.Queries;
using Application.Employees.Queries;
using AutoMapper;
using Domain.Entities;

namespace Application.Common.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Category, CategoryDto>();
            CreateMap<Category, CategoryItemDto>();

            CreateMap<CustomerDemographic, CustomerDemographicItemDto>();
            CreateMap<Customer, CustomerDto>();
            CreateMap<Customer, CustomerItemDto>();

            CreateMap<Employee, EmployeeDto>();
            CreateMap<Employee, EmployeeItemDto>();
        }
    }
}