using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Persistance.Configurations
{
    class OrderDetailConfiguration : IEntityTypeConfiguration<OrderDetail>
    {
        public void Configure(EntityTypeBuilder<OrderDetail> builder)
        {
            builder.Property(e => e.UnitPrice)
                .HasDefaultValue(0);
            builder.Property(e => e.Quantity)
                .HasDefaultValue(1);
            builder.Property(e => e.Discount)
                .HasDefaultValue(0);
        }
    }
}
