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

namespace Application.Customers.Queries
{
    public class GetCustomersQuery : PageableQuery, IRequest<List<CustomerItemDto>>
    { }

    public class GetCustomersQueryHandler : IRequestHandler<GetCustomersQuery, List<CustomerItemDto>>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetCustomersQueryHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public Task<List<CustomerItemDto>> Handle(GetCustomersQuery request, CancellationToken cancellationToken)
        {
            var result = _context.Customers
                .Skip((request.PageNumber - 1) * request.ItemsOnPage)
                .Take(request.ItemsOnPage)
                .ProjectTo<CustomerItemDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            return result;
        }
    }
}
