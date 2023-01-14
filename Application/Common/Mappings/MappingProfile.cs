using Application.Categories.Queries;
using Application.CustomerDemographics.Queries;
using Application.Customers.Queries;
using Application.Employees.Queries;
using Application.Orders.Queries;
using Application.Products.Queries;
using Application.Regions.Queries;
using Application.Shippers.Queries;
using Application.Suppliers.Queries;
using Application.Territories.Queries;
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

            CreateMap<Order, OrderDto>();
            CreateMap<Order, OrderItemDto>();

            CreateMap<Product, ProductDto>();
            CreateMap<Product, ProductItemDto>();

            CreateMap<Region, RegionDto>();
            CreateMap<Region, RegionItemDto>();

            CreateMap<Shipper, ShipperDto>();
            CreateMap<Shipper, ShipperItemDto>();

            CreateMap<Supplier, SupplierDto>();
            CreateMap<Supplier, SupplierItemDto>();

            CreateMap<Territory, TerritoryDto>();
            CreateMap<Territory, TerritoryItemDto>();
        }
    }
}