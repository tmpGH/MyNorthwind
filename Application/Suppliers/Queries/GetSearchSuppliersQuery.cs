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

namespace Application.Suppliers.Queries
{
    public class GetSearchSuppliersQuery : PageableQuery, IRequest<List<SupplierItemDto>>
    {
        public string CompanyName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Region { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
    }

    public class GetSearchSuppliersQueryHandler : IRequestHandler<GetSearchSuppliersQuery, List<SupplierItemDto>>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetSearchSuppliersQueryHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public Task<List<SupplierItemDto>> Handle(GetSearchSuppliersQuery request, CancellationToken cancellationToken)
        {
            var result = CreateEFQuery(_context.Suppliers, request)
                .ProjectTo<SupplierItemDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            return result;
        }

        private IQueryable<Supplier> CreateEFQuery(IQueryable<Supplier> dbSet, GetSearchSuppliersQuery conditions)
        {
            var result = dbSet;
            if (!string.IsNullOrWhiteSpace(conditions.CompanyName))
            {
                conditions.CompanyName = conditions.CompanyName;
                result = result.Where(c => c.CompanyName.StartsWith(conditions.CompanyName));
            }
            if (!string.IsNullOrWhiteSpace(conditions.Address))
            {
                result = result.Where(c => c.Address.StartsWith(conditions.Address));
            }
            if (!string.IsNullOrWhiteSpace(conditions.City))
            {
                result = result.Where(c => c.City.StartsWith(conditions.City));
            }
            if (!string.IsNullOrWhiteSpace(conditions.Region))
            {
                result = result.Where(c => c.Region.StartsWith(conditions.Region));
            }
            if (!string.IsNullOrWhiteSpace(conditions.PostalCode))
            {
                result = result.Where(c => c.PostalCode.StartsWith(conditions.PostalCode));
            }
            if (!string.IsNullOrWhiteSpace(conditions.Country))
            {
                result = result.Where(c => c.Country.StartsWith(conditions.Country));
            }

            result = result.OrderBy(e => e.CompanyName)
                .Skip((conditions.PageNumber - 1) * conditions.ItemsOnPage)
                .Take(conditions.ItemsOnPage);

            return result;
        }
    }
}
