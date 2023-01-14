using Application.Common;
using Application.Common.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Territories.Queries
{
    public class GetTerritoriesQuery : PageableQuery, IRequest<List<TerritoryItemDto>> { }

    public class GetTerritoriesQueryHandler : IRequestHandler<GetTerritoriesQuery, List<TerritoryItemDto>>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetTerritoriesQueryHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public Task<List<TerritoryItemDto>> Handle(GetTerritoriesQuery request, CancellationToken cancellationToken)
        {
            var result = _context.Territories
                .Skip((request.PageNumber - 1) * request.ItemsOnPage)
                .Take(request.ItemsOnPage)
                .ProjectTo<TerritoryItemDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            return result;
        }
    }
}
