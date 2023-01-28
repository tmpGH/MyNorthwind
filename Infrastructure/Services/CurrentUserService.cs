using Application.Common.Interfaces;

namespace Infrastructure.Services
{
    // TODO: service implementation
    class CurrentUserService : ICurrentUserService
    {
        public CurrentUserService()
        {
            UserId = "INITIAL";
        }

        public string UserId { get; }
    }
}
