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

namespace Application.Shippers.Queries
{
    public class GetSearchShippersQuery : PageableQuery, IRequest<List<ShipperItemDto>>
    {
        public string CompanyName { get; set; }
        public string Phone { get; set; }
    }

    public class GetSearchShippersQueryHandler : IRequestHandler<GetSearchShippersQuery, List<ShipperItemDto>>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetSearchShippersQueryHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public Task<List<ShipperItemDto>> Handle(GetSearchShippersQuery request, CancellationToken cancellationToken)
        {
            var result = CreateEFQuery(_context.Shippers, request)
                .ProjectTo<ShipperItemDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            return result;
        }

        private IQueryable<Shipper> CreateEFQuery(IQueryable<Shipper> dbSet, GetSearchShippersQuery conditions)
        {
            var result = dbSet;
            if (!string.IsNullOrWhiteSpace(conditions.CompanyName))
            {
                result = result.Where(c => c.CompanyName.StartsWith(conditions.CompanyName));
            }
            if (!string.IsNullOrWhiteSpace(conditions.Phone))
            {
                result = result.Where(c => c.Phone.StartsWith(conditions.Phone));
            }

            result = result.OrderBy(e => e.CompanyName)
                .Skip((conditions.PageNumber - 1) * conditions.ItemsOnPage)
                .Take(conditions.ItemsOnPage);

            return result;
        }
    }
}
