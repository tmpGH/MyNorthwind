using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Common.Interfaces
{
    public interface IAppDbContext
    {
        DbSet<Category> Categories { get; set; }
        DbSet<Customer> Customers { get; set; }
        DbSet<CustomerDemographic> CustomerDemographics { get; set; }
        DbSet<Employee> Employees { get; set; }
        DbSet<Order> Orders { get; set; }
        DbSet<Product> Products { get; set; }
        DbSet<Region> Regions { get; set; }
        DbSet<Shipper> Shippers { get; set; }
        DbSet<Supplier> Suppliers { get; set; }
        DbSet<Territory> Territories { get; set; }

        int SaveChanges();
        Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
    }
}
