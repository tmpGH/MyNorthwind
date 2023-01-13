using Application.Common;
using Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Categories.Queries
{
    public class GetCategoriesQuery : PageableQuery, IRequest<List<CategoryItemDto>>
    {
        public GetCategoriesQuery()
        {
            PageNumber = 1;
            ItemsOnPage = 10;
        }
    }

    public class GetCategoriesQueryHandler : IRequestHandler<GetCategoriesQuery, List<CategoryItemDto>>
    {
        private readonly IAppDbContext _context;

        public GetCategoriesQueryHandler(IAppDbContext context)
        {
            _context = context;
        }

        public Task<List<CategoryItemDto>> Handle(GetCategoriesQuery request, CancellationToken cancellationToken)
        {
            var result = _context.Categories
                .Skip( (request.PageNumber - 1) * request.ItemsOnPage )
                .Take(request.ItemsOnPage)
                .Select(e => new CategoryItemDto {
                    CategoryID = e.CategoryID,
                    CategoryName = e.CategoryName,
                    Description = e.Description
                })
                .ToListAsync();
            return result;
        }
    }

    public class CategoryItemDto
    {
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
        public string Description { get; set; }
    }
}