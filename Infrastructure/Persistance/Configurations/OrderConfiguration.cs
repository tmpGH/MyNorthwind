using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Persistance.Configurations
{
    class OrderConfiguration : IEntityTypeConfiguration<Order>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<Order> builder)
        {
            builder.Property(e => e.CustomerID)
                .HasMaxLength(5)
                .IsFixedLength();
            builder.Property(e => e.ShipName)
                .HasMaxLength(40);
            builder.Property(e => e.ShipAddress)
                .HasMaxLength(60);
            builder.Property(e => e.ShipCity)
                .HasMaxLength(15);
            builder.Property(e => e.ShipRegion)
                .HasMaxLength(15);
            builder.Property(e => e.ShipPostalCode)
                .HasMaxLength(10);
            builder.Property(e => e.ShipCountry)
                .HasMaxLength(15);
        }
    }
}
