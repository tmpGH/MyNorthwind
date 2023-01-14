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

namespace Application.CustomerDemographics.Queries
{
    public class GetCustomerDemographicsQuery : PageableQuery, IRequest<List<CustomerDemographicItemDto>>
    { }

    public class GetCustomerDemographicsQueryHandler : IRequestHandler<GetCustomerDemographicsQuery, List<CustomerDemographicItemDto>>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetCustomerDemographicsQueryHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public Task<List<CustomerDemographicItemDto>> Handle(GetCustomerDemographicsQuery request, CancellationToken cancellationToken)
        {
            var result = _context.CustomerDemographics
                .Skip((request.PageNumber - 1) * request.ItemsOnPage)
                .Take(request.ItemsOnPage)
                .ProjectTo<CustomerDemographicItemDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            return result;
        }
    }
}

