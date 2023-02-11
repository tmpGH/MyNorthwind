using Application.Common;
using Application.Common.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Territories.Queries
{
    public class GetSearchTerritoriesQuery : PageableQuery, IRequest<List<TerritoryItemDto>>
    {
        public string TerritoryDescription { get; set; }
    }

    public class GetSearchTerritoriesQueryHandler : IRequestHandler<GetSearchTerritoriesQuery, List<TerritoryItemDto>>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetSearchTerritoriesQueryHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public Task<List<TerritoryItemDto>> Handle(GetSearchTerritoriesQuery request, CancellationToken cancellationToken)
        {
            var result = CreateEFQuery(_context.Territories, request)
                .ProjectTo<TerritoryItemDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            return result;
        }

        private IQueryable<Territory> CreateEFQuery(IQueryable<Territory> dbSet, GetSearchTerritoriesQuery conditions)
        {
            var result = dbSet;
            if (!string.IsNullOrWhiteSpace(conditions.TerritoryDescription))
            {
                result = result.Where(c => c.TerritoryDescription.Contains(conditions.TerritoryDescription));
            }

            result = result.OrderBy(e => e.TerritoryDescription)
                .Skip((conditions.PageNumber - 1) * conditions.ItemsOnPage)
                .Take(conditions.ItemsOnPage);

            return result;
        }
    }
}
