using Application.Common;
using Application.Common.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Orders.Queries
{
    public class GetSearchOrdersQuery : PageableQuery, IRequest<List<OrderItemDto>>
    {
        public DateTime? OrderDate { get; set; }
        public DateTime? RequiredDate { get; set; }
        public DateTime? ShippedDate { get; set; }
    }

    public class GetSearchOrdersQueryHandler : IRequestHandler<GetSearchOrdersQuery, List<OrderItemDto>>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetSearchOrdersQueryHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public Task<List<OrderItemDto>> Handle(GetSearchOrdersQuery request, CancellationToken cancellationToken)
        {
            var result = CreateEFQuery(_context.Orders, request)
                .ProjectTo<OrderItemDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            return result;
        }

        private IQueryable<Order> CreateEFQuery(IQueryable<Order> dbSet, GetSearchOrdersQuery conditions)
        {
            var result = dbSet;
            if (!conditions.OrderDate.HasValue)
            {
                result = result.Where(c => c.OrderDate.Equals(conditions.OrderDate));
            }
            if (!conditions.RequiredDate.HasValue)
            {
                result = result.Where(c => c.RequiredDate.Equals(conditions.RequiredDate));
            }
            if (!conditions.ShippedDate.HasValue)
            {
                result = result.Where(c => c.ShippedDate.Equals(conditions.ShippedDate));
            }

            result = result.OrderBy(e => e.OrderDate)
                .Skip((conditions.PageNumber - 1) * conditions.ItemsOnPage)
                .Take(conditions.ItemsOnPage);

            return result;
        }
    }
}
