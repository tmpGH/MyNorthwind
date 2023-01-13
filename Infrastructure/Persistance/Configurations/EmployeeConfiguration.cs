using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Persistance.Configurations
{
    class EmployeeConfiguration : IEntityTypeConfiguration<Employee>
    {
        public void Configure(EntityTypeBuilder<Employee> builder)
        {
            builder.Property(e => e.LastName)
                .HasMaxLength(20)
                .IsRequired();
            builder.Property(e => e.FirstName)
                .HasMaxLength(10)
                .IsRequired();
            builder.Property(e => e.Title)
                .HasMaxLength(30);
            builder.Property(e => e.TitleOfCourtesy)
                .HasMaxLength(25);
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
            builder.Property(e => e.HomePhone)
                .HasMaxLength(24);
            builder.Property(e => e.Extension)
                .HasMaxLength(4);
            builder.Property(e => e.PhotoPath)
                .HasMaxLength(255);
        }
    }
}
