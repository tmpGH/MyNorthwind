using Application.Common.Interfaces;
using AutoMapper;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Suppliers.Queries
{
    public class GetSupplierQuery : IRequest<SupplierDto>
    {
        public string Id { get; set; }
    }

    public class GetSupplierQueryHandler : IRequestHandler<GetSupplierQuery, SupplierDto>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetSupplierQueryHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<SupplierDto> Handle(GetSupplierQuery request, CancellationToken cancellationToken)
        {
            var entity = await _context.Suppliers.FindAsync(request.Id);

            return _mapper.Map<SupplierDto>(entity);
        }
    }
}
