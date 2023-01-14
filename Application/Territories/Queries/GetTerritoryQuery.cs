using Application.Common.Interfaces;
using AutoMapper;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Territories.Queries
{
    public class GetTerritoryQuery : IRequest<TerritoryDto>
    {
        public string Id { get; set; }
    }

    public class GetTerritoryQueryHandler : IRequestHandler<GetTerritoryQuery, TerritoryDto>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetTerritoryQueryHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<TerritoryDto> Handle(GetTerritoryQuery request, CancellationToken cancellationToken)
        {
            var entity = await _context.Territories.FindAsync(request.Id);

            return _mapper.Map<TerritoryDto>(entity);
        }
    }
}
