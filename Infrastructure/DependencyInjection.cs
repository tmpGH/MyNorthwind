using Application.Common.Interfaces;
using Domain.Interfaces;
using Infrastructure.Persistance;
using Infrastructure.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            services
                .AddDbContext<AppDbContext>( options =>
                    options.UseSqlServer(configuration.GetConnectionString("NorthwindDatabase")) )
                .AddScoped<IAppDbContext>(provider => provider.GetService<AppDbContext>())
            
                .AddScoped<ICurrentUserService, CurrentUserService>()
                .AddTransient<IDateTime, DateTimeService>();

            return services;
        }
    }
}
