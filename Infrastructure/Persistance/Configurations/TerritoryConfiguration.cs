using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Persistance.Configurations
{
    class TerritoryConfiguration : IEntityTypeConfiguration<Territory>
    {
        public void Configure(EntityTypeBuilder<Territory> builder)
        {
            builder.Property(e => e.TerritoryID)
                .HasMaxLength(20);
            builder.Property(e => e.TerritoryDescription)
                .HasMaxLength(50)
                .IsFixedLength()
                .IsRequired();
        }
    }
}
