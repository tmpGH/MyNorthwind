using Application.Common;
using Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Employees.Queries
{
    public class GetEmployeesQuery : PageableQuery, IRequest<List<EmployeeItemDto>>
    { }

    public class GetEmployeesQueryHandler : IRequestHandler<GetEmployeesQuery, List<EmployeeItemDto>>
    {
        private readonly IAppDbContext _context;

        public GetEmployeesQueryHandler(IAppDbContext context)
        {
            _context = context;
        }

        public Task<List<EmployeeItemDto>> Handle(GetEmployeesQuery request, CancellationToken cancellationToken)
        {
            var result = _context.Employees
                .Skip((request.PageNumber - 1) * request.ItemsOnPage)
                .Take(request.ItemsOnPage)
                .Select(e => new EmployeeItemDto
                {
                    EmployeeID = e.EmployeeID,
                    LastName = e.LastName,
                    FirstName = e.FirstName,
                    Title = e.Title,
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

    public class EmployeeItemDto
    {
        public int EmployeeID { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string Title { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Region { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
    }
}
