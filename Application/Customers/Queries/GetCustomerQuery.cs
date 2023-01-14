using Application.Common.Interfaces;
using AutoMapper;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Customers.Queries
{
    public class GetCustomerQuery : IRequest<CustomerDto>
    {
        public string Id { get; set; }
    }

    public class GetCustomerQueryHandler : IRequestHandler<GetCustomerQuery, CustomerDto>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetCustomerQueryHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<CustomerDto> Handle(GetCustomerQuery request, CancellationToken cancellationToken)
        {
            var entity = await _context.Customers.FindAsync(request.Id);

            return _mapper.Map<CustomerDto>(entity);
        }
    }
}
