using Application.Common.Interfaces;
using AutoMapper;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Regions.Queries
{
    public class GetRegionQuery : IRequest<RegionDto>
    {
        public string Id { get; set; }
    }

    public class GetRegionQueryHandler : IRequestHandler<GetRegionQuery, RegionDto>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetRegionQueryHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<RegionDto> Handle(GetRegionQuery request, CancellationToken cancellationToken)
        {
            var entity = await _context.Regions.FindAsync(request.Id);

            return _mapper.Map<RegionDto>(entity);
        }
    }
}
