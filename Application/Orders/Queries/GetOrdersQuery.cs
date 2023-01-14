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

namespace Application.Orders.Queries
{
    public class GetOrdersQuery : PageableQuery, IRequest<List<OrderItemDto>> { }

    public class GetOrdersQueryHandler : IRequestHandler<GetOrdersQuery, List<OrderItemDto>>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetOrdersQueryHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public Task<List<OrderItemDto>> Handle(GetOrdersQuery request, CancellationToken cancellationToken)
        {
            var result = _context.Orders
                .Skip((request.PageNumber - 1) * request.ItemsOnPage)
                .Take(request.ItemsOnPage)
                .ProjectTo<OrderItemDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            return result;
        }
    }
}
