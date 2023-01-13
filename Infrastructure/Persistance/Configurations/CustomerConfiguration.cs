using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Persistance.Configurations
{
    class CustomerConfiguration : IEntityTypeConfiguration<Customer>
    {
        public void Configure(EntityTypeBuilder<Customer> builder)
        {
            builder.Property(e => e.CompanyName)
                .HasMaxLength(40)
                .IsRequired();
            builder.Property(e => e.ContactName)
                .HasMaxLength(30);
            builder.Property(e => e.ContactTitle)
                .HasMaxLength(30);
            builder.Property(e => e.Address)
                .HasMaxLength(60);
            builder.Property(e => e.City)
                .HasMaxLength(15);
            builder.Property(e => e.Region)
                .HasMaxLength(15);
            builder.Property(e => e.PostalCode)
                .HasMaxLength(10);
            builder.Property(e => e.Country)
                .HasMaxLength(15);
            builder.Property(e => e.Phone)
                .HasMaxLength(24);
            builder.Property(e => e.Fax)
                .HasMaxLength(24);
        }
    }
}
