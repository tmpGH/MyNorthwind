using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Persistance.Configurations
{
    class CustomerDemographicConfiguration : IEntityTypeConfiguration<CustomerDemographic>
    {
        public void Configure(EntityTypeBuilder<CustomerDemographic> builder)
        {
            builder.HasKey(e => e.CustomerTypeID);
            builder.Property(e => e.CustomerTypeID)
                .HasMaxLength(10)
                .IsRequired();
        }
    }
}
