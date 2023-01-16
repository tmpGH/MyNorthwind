using Application.Common.Interfaces;
using Domain.Common;
using Domain.Entities;
using Domain.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;

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
        public DbSet<Customer> Customers { get; set; }
        public DbSet<CustomerDemographic> CustomerDemographics { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Region> Regions { get; set; }
        public DbSet<Shipper> Shippers { get; set; }
        public DbSet<Supplier> Suppliers { get; set; }
        public DbSet<Territory> Territories { get; set; }

        public override int SaveChanges()
        {
            foreach(var entry in ChangeTracker.Entries<AuditableEntity>())
            {
                // TODO: set CreatedBy and LastModifiedBy
                switch (entry.State)
                {
                    case EntityState.Added:
                        //entry.Entity.CreatedBy = _currentUserService.UserId;
                        entry.Entity.Created = _dateTime.Now;
                        break;
                    case EntityState.Modified:
                        //entry.Entity.LastModifiedBy = _currentUserService.UserId;
                        entry.Entity.LastModified = _dateTime.Now;
                        break;
                }
            }

            return base.SaveChanges();
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            foreach (var entry in ChangeTracker.Entries<AuditableEntity>())
            {
                // TODO: set CreatedBy
                switch (entry.State)
                {
                    case EntityState.Added:
                        //entry.Entity.CreatedBy = _currentUserService.UserId;
                        entry.Entity.Created = _dateTime.Now;
                        break;
                    case EntityState.Modified:
                        //entry.Entity.LastModifiedBy = _currentUserService.UserId;
                        entry.Entity.LastModified = _dateTime.Now;
                        break;
                }
            }

            return base.SaveChangesAsync();
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

            builder.Entity<CustomerCustomerDemo>()
                .HasKey(cc => new { cc.CustomerID, cc.CustomerTypeID });
            builder.Entity<CustomerCustomerDemo>()
                .HasOne(cc => cc.Customer)
                .WithMany(c => c.CustomerCustomerDemos)
                .HasForeignKey(cc => cc.CustomerID);
            builder.Entity<CustomerCustomerDemo>()
                .HasOne(cc => cc.CustomerDemographic)
                .WithMany(c => c.CustomerCustomerDemos)
                .HasForeignKey(cc => cc.CustomerTypeID);

            builder.Entity<Employee>()
                .HasOne(e => e.Manager)
                .WithMany(e => e.Employees)
                .HasForeignKey(e => e.ReportsTo);

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

            builder.Entity<Order>()
                .HasOne(o => o.Shipper)
                .WithMany(s => s.Orders)
                .HasForeignKey(o => o.ShipVia);

            builder.Entity<OrderDetail>().ToTable("Order Details");
            builder.Entity<OrderDetail>()
                .HasKey(od => new { od.OrderID, od.ProductID });

            builder.Entity<Region>().ToTable("Region");

            base.OnModelCreating(builder);
        }
    }
}
