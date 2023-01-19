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

namespace Application.Categories.Queries
{
    public class GetCategoriesQuery : PageableQuery, IRequest<List<CategoryItemDto>> { }

    public class GetCategoriesQueryHandler : IRequestHandler<GetCategoriesQuery, List<CategoryItemDto>>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetCategoriesQueryHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public Task<List<CategoryItemDto>> Handle(GetCategoriesQuery request, CancellationToken cancellationToken)
        {
            var result = _context.Categories
                .OrderBy(e => e.CategoryName)
                .Skip((request.PageNumber - 1) * request.ItemsOnPage)
                .Take(request.ItemsOnPage)
                .ProjectTo<CategoryItemDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            return result;
        }
    }
}