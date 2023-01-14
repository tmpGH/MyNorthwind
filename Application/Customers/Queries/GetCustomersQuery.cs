using Application.Common;
using Application.Common.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Customers.Queries
{
    public class GetCustomersQuery : PageableQuery, IRequest<List<CustomerItemDto>>
    { }

    public class GetCustomersQueryHandler : IRequestHandler<GetCustomersQuery, List<CustomerItemDto>>
    {
        private readonly IAppDbContext _context;

        public GetCustomersQueryHandler(IAppDbContext context)
        {
            _context = context;
        }

        public Task<List<CustomerItemDto>> Handle(GetCustomersQuery request, CancellationToken cancellationToken)
        {
            var result = _context.Customers
                .Skip((request.PageNumber - 1) * request.ItemsOnPage)
                .Take(request.ItemsOnPage)
                .Select(e => new CustomerItemDto
                {
                    CustomerID = e.CustomerID,
                    CompanyName = e.CompanyName,
                    Address = e.Address,
                    City = e.City,
                    Region = e.Region,
                    PostalCode = e.PostalCode,
                    Country = e.Country
                })
                .ToListAsync();

            return result;
        }
    }

    public class CustomerItemDto
    {
        public string CustomerID { get; set; }
        public string CompanyName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Region { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
    }
}
