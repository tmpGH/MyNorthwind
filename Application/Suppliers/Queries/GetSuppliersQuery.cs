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

namespace Application.Suppliers.Queries
{
    public class GetSuppliersQuery : PageableQuery, IRequest<List<SupplierItemDto>> { }

    public class GetSuppliersQueryHandler : IRequestHandler<GetSuppliersQuery, List<SupplierItemDto>>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetSuppliersQueryHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public Task<List<SupplierItemDto>> Handle(GetSuppliersQuery request, CancellationToken cancellationToken)
        {
            var result = _context.Suppliers
                .Skip((request.PageNumber - 1) * request.ItemsOnPage)
                .Take(request.ItemsOnPage)
                .ProjectTo<SupplierItemDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            return result;
        }
    }
}
