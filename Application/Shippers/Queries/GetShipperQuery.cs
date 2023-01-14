using Application.Common.Interfaces;
using AutoMapper;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Shippers.Queries
{
    public class GetShipperQuery : IRequest<ShipperDto>
    {
        public string Id { get; set; }
    }

    public class GetShipperQueryHandler : IRequestHandler<GetShipperQuery, ShipperDto>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetShipperQueryHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ShipperDto> Handle(GetShipperQuery request, CancellationToken cancellationToken)
        {
            var entity = await _context.Shippers.FindAsync(request.Id);

            return _mapper.Map<ShipperDto>(entity);
        }
    }
}
