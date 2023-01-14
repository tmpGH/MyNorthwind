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

namespace Application.Shippers.Queries
{
    public class GetShippersQuery : PageableQuery, IRequest<List<ShipperItemDto>> { }

    public class GetShippersQueryHandler : IRequestHandler<GetShippersQuery, List<ShipperItemDto>>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetShippersQueryHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public Task<List<ShipperItemDto>> Handle(GetShippersQuery request, CancellationToken cancellationToken)
        {
            var result = _context.Shippers
                .Skip((request.PageNumber - 1) * request.ItemsOnPage)
                .Take(request.ItemsOnPage)
                .ProjectTo<ShipperItemDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            return result;
        }
    }
}
