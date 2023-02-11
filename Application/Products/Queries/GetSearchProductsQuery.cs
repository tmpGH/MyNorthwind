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

namespace Application.Products.Queries
{
    public class GetSearchProductsQuery : PageableQuery, IRequest<List<ProductItemDto>>
    {
        public string ProductName { get; set; }
        public decimal? UnitPrice { get; set; }
    }

    public class GetSearchProductsQueryHandler : IRequestHandler<GetSearchProductsQuery, List<ProductItemDto>>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetSearchProductsQueryHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public Task<List<ProductItemDto>> Handle(GetSearchProductsQuery request, CancellationToken cancellationToken)
        {
            var result = CreateEFQuery(_context.Products, request)
                .ProjectTo<ProductItemDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            return result;
        }

        private IQueryable<Product> CreateEFQuery(IQueryable<Product> dbSet, GetSearchProductsQuery conditions)
        {
            var result = dbSet;
            if (!string.IsNullOrWhiteSpace(conditions.ProductName))
            {
                result = result.Where(c => c.ProductName.StartsWith(conditions.ProductName));
            }
            if (conditions.UnitPrice.HasValue)
            {
                result = result.Where(c => c.UnitPrice.Equals(conditions.UnitPrice));
            }

            result = result.OrderBy(e => e.ProductName)
                .Skip((conditions.PageNumber - 1) * conditions.ItemsOnPage)
                .Take(conditions.ItemsOnPage);

            return result;
        }
    }
}
