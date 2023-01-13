using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Persistance.Configurations
{
    class ProductConfiguration : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.Property(e => e.ProductName)
                .HasMaxLength(40)
                .IsRequired();
            builder.Property(e => e.QuantityPerUnit)
                .HasMaxLength(20);
            builder.Property(e => e.UnitPrice)
                .HasColumnType("money");
        }
    }
}
