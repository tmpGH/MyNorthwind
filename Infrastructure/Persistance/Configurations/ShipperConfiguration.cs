using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Persistance.Configurations
{
    class ShipperConfiguration : IEntityTypeConfiguration<Shipper>
    {
        public void Configure(EntityTypeBuilder<Shipper> builder)
        {
            builder.Property(e => e.CompanyName)
                .HasMaxLength(40)
                .IsRequired();
            builder.Property(e => e.Phone)
                .HasMaxLength(24);
        }
    }
}
