using Application.Common;
using Application.Common.Interfaces;
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

        public GetCustomerDemographicsQueryHandler(IAppDbContext context)
        {
            _context = context;
        }

        public Task<List<CustomerDemographicItemDto>> Handle(GetCustomerDemographicsQuery request, CancellationToken cancellationToken)
        {
            var result = _context.CustomerDemographics
                .Skip((request.PageNumber - 1) * request.ItemsOnPage)
                .Take(request.ItemsOnPage)
                .Select(e => new CustomerDemographicItemDto
                {
                    CustomerTypeID = e.CustomerTypeID,
                    CustomerDesc = e.CustomerDesc
                })
                .ToListAsync();

            return result;
        }
    }

    public class CustomerDemographicItemDto
    {
        public string CustomerTypeID { get; set; }
        public string CustomerDesc { get; set; }
    }
}

