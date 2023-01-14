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

namespace Application.Regions.Queries
{
    public class GetRegionsQuery : PageableQuery, IRequest<List<RegionItemDto>> { }

    public class GetRegionsQueryHandler : IRequestHandler<GetRegionsQuery, List<RegionItemDto>>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetRegionsQueryHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public Task<List<RegionItemDto>> Handle(GetRegionsQuery request, CancellationToken cancellationToken)
        {
            var result = _context.Regions
                .Skip((request.PageNumber - 1) * request.ItemsOnPage)
                .Take(request.ItemsOnPage)
                .ProjectTo<RegionItemDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            return result;
        }
    }
}
