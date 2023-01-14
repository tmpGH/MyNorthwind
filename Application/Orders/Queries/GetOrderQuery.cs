using Application.Common.Interfaces;
using AutoMapper;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Orders.Queries
{
    public class GetOrderQuery : IRequest<OrderDto>
    {
        public int Id { get; set; }
    }

    public class GetOrderQueryHandler : IRequestHandler<GetOrderQuery, OrderDto>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetOrderQueryHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<OrderDto> Handle(GetOrderQuery request, CancellationToken cancellationToken)
        {
            var entity = await _context.Orders.FindAsync(request.Id);

            return _mapper.Map<OrderDto>(entity);
        }
    }
}
