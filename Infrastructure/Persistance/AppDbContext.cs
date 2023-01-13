using Application.Interfaces;
using Domain.Entities;
using Domain.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace Infrastructure.Persistance
{
    public class AppDbContext : DbContext, IAppDbContext
    {
        private readonly IDateTime _dateTime;

        public AppDbContext(DbContextOptions options, IDateTime dateTime) : base(options)
        {
            _dateTime = dateTime;
        }

        public DbSet<Category> Categories { get; set; }
        public DbSet<CustomerDemographic> CustomerDemographics { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Region> Region { get; set; }
        public DbSet<Shipper> Shippers { get; set; }
        public DbSet<Supplier> Suppliers { get; set; }
        public DbSet<Territory> Territories { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
            
            builder.Entity<EmployeeTerritory>()
                .HasKey(et => new { et.EmployeeID, et.TerritoryID });
            builder.Entity<EmployeeTerritory>()
                .HasOne(et => et.Employee)
                .WithMany(e => e.EmployeeTerritories)
                .HasForeignKey(et => et.EmployeeID);
            builder.Entity<EmployeeTerritory>()
                .HasOne(et => et.Territory)
                .WithMany(e => e.EmployeeTerritories)
                .HasForeignKey(et => et.TerritoryID);

            base.OnModelCreating(builder);
        }
    }
}
