using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Persistance.Configurations
{
    class CustomerCustomerDemoConfiguration : IEntityTypeConfiguration<CustomerCustomerDemo>
    {
        public void Configure(EntityTypeBuilder<CustomerCustomerDemo> builder)
        {
            builder.Property(e => e.CustomerID)
                .HasMaxLength(5)
                .IsFixedLength()
                .IsRequired();
            builder.Property(e => e.CustomerTypeID)
                .HasMaxLength(10)
                .IsFixedLength()
                .IsRequired();
        }
    }
}
