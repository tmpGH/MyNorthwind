using Application.Interfaces;
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

        public GetCategoryQueryHandler(IAppDbContext context)
        {
            _context = context;
        }

        protected override CategoryDto Handle(GetCategoryQuery request)
        {
            var entity = _context.Categories.Find(request.Id);
            return entity == null ? null : new CategoryDto
                {
                    CategoryID = entity.CategoryID,
                    CategoryName = entity.CategoryName,
                    Description = entity.Description
                };
        }
    }

    public class CategoryDto
    {
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
        public string Description { get; set; }
    }
}
