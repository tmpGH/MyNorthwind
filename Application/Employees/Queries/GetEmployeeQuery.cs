using Application.Interfaces;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Employees.Queries
{
    public class GetEmployeeQuery : IRequest<EmployeeDto>
    {
        public int Id { get; set; }
    }

    public class GetEmployeeQueryHandler : IRequestHandler<GetEmployeeQuery, EmployeeDto>
    {
        private readonly IAppDbContext _context;

        public GetEmployeeQueryHandler(IAppDbContext context)
        {
            _context = context;
        }

        public async Task<EmployeeDto> Handle(GetEmployeeQuery request, CancellationToken cancellationToken)
        {
            var entity = await _context.Employees.FindAsync(request.Id);
            return entity == null ? null : new EmployeeDto
            {
                EmployeeID = entity.EmployeeID,
                LastName = entity.LastName,
                FirstName = entity.FirstName,
                Title = entity.Title,
                TitleOfCourtesy = entity.TitleOfCourtesy,
                BirthDate = entity.BirthDate,
                HireDate = entity.HireDate,
                Address = entity.Address,
                City = entity.City,
                Region = entity.Region,
                PostalCode = entity.PostalCode,
                Country = entity.Country,
                HomePhone = entity.HomePhone,
                Extension = entity.Extension,
                Notes = entity.Notes,
                PhotoPath = entity.PhotoPath
            };
        }
    }

    public class EmployeeDto
    {
        public int EmployeeID { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string Title { get; set; }
        public string TitleOfCourtesy { get; set; }
        public DateTime? BirthDate { get; set; }
        public DateTime? HireDate { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Region { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
        public string HomePhone { get; set; }
        public string Extension { get; set; }
        public string Notes { get; set; }
        public string PhotoPath { get; set; }
    }
}
