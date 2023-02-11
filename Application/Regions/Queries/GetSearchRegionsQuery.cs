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

namespace Application.Regions.Queries
{
    public class GetSearchRegionsQuery : PageableQuery, IRequest<List<RegionItemDto>>
    {
        public string RegionDescription { get; set; }
    }

    public class GetSearchRegionsQueryHandler : IRequestHandler<GetSearchRegionsQuery, List<RegionItemDto>>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetSearchRegionsQueryHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public Task<List<RegionItemDto>> Handle(GetSearchRegionsQuery request, CancellationToken cancellationToken)
        {
            var result = CreateEFQuery(_context.Regions, request)
                .ProjectTo<RegionItemDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            return result;
        }

        private IQueryable<Region> CreateEFQuery(IQueryable<Region> dbSet, GetSearchRegionsQuery conditions)
        {
            var result = dbSet;
            if (!string.IsNullOrWhiteSpace(conditions.RegionDescription))
            {
                result = result.Where(c => c.RegionDescription.Contains(conditions.RegionDescription));
            }

            result = result.OrderBy(e => e.RegionDescription)
                .Skip((conditions.PageNumber - 1) * conditions.ItemsOnPage)
                .Take(conditions.ItemsOnPage);

            return result;
        }
    }
}
