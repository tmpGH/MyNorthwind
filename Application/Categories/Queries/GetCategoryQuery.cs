using Application.Common.Interfaces;
using AutoMapper;
using MediatR;

namespace Application.Categories.Queries
{
    public class GetCategoryQuery : IRequest<CategoryDto>
    {
        public int Id { get; set; }
    }

    // example of synchronous handler
    public class GetCategoryQueryHandler : RequestHandler<GetCategoryQuery, CategoryDto>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetCategoryQueryHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        protected override CategoryDto Handle(GetCategoryQuery request)
        {
            var entity = _context.Categories.Find(request.Id);

            return _mapper.Map<CategoryDto>(entity);
        }
    }
}
