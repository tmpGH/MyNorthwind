using Application.Common.Interfaces;
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

        public GetCustomerQueryHandler(IAppDbContext context)
        {
            _context = context;
        }

        public async Task<CustomerDto> Handle(GetCustomerQuery request, CancellationToken cancellationToken)
        {
            var entity = await _context.Customers.FindAsync(request.Id);
            return entity == null ? null : new CustomerDto
            {
                CustomerID = entity.CustomerID,
                CompanyName = entity.CompanyName,
                ContactName = entity.ContactName,
                ContactTitle = entity.ContactTitle,
                Address = entity.Address,
                City = entity.City,
                Region = entity.Region,
                PostalCode = entity.PostalCode,
                Country = entity.Country,
                Phone = entity.Phone,
                Fax = entity.Fax
            };
        }
    }

    public class CustomerDto
    {
        public string CustomerID { get; set; }
        public string CompanyName { get; set; }
        public string ContactName { get; set; }
        public string ContactTitle { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Region { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
        public string Phone { get; set; }
        public string Fax { get; set; }
    }
}
