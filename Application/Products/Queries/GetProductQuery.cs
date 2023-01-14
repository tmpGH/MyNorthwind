using Application.Common.Interfaces;
using AutoMapper;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Products.Queries
{
    public class GetProductQuery : IRequest<ProductDto>
    {
        public string Id { get; set; }
    }

    public class GetProductQueryHandler : IRequestHandler<GetProductQuery, ProductDto>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetProductQueryHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ProductDto> Handle(GetProductQuery request, CancellationToken cancellationToken)
        {
            var entity = await _context.Products.FindAsync(request.Id);

            return _mapper.Map<ProductDto>(entity);
        }
    }
}
