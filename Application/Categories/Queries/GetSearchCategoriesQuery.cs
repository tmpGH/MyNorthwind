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

namespace Application.Categories.Queries
{
    public class GetSearchCategoriesQuery : PageableQuery, IRequest<List<CategoryItemDto>>
    {
        public string CategoryName { get; set; }
        public string Description { get; set; }
    }

    public class GetSearchCategoriesQueryHandler : IRequestHandler<GetSearchCategoriesQuery, List<CategoryItemDto>>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetSearchCategoriesQueryHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public Task<List<CategoryItemDto>> Handle(GetSearchCategoriesQuery request, CancellationToken cancellationToken)
        {
            var result = CreateEFQuery(_context.Categories, request)
                .ProjectTo<CategoryItemDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            return result;
        }

        private IQueryable<Category> CreateEFQuery(IQueryable<Category> dbSet, GetSearchCategoriesQuery conditions)
        {
            var result = dbSet;
            if (!string.IsNullOrWhiteSpace(conditions.CategoryName))
            {
                result = result.Where(c => c.CategoryName.StartsWith(conditions.CategoryName));
            }
            if (!string.IsNullOrWhiteSpace(conditions.Description))
            {
                result = result.Where(c => c.Description.Contains(conditions.Description));
            }

            result = result.OrderBy(e => e.CategoryName)
                .Skip((conditions.PageNumber - 1) * conditions.ItemsOnPage)
                .Take(conditions.ItemsOnPage);

            return result;
        }
    }
}