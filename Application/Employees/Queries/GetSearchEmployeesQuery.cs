using Application.Common;
using Application.Common.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Employees.Queries
{
    public class GetSearchEmployeesQuery : PageableQuery, IRequest<List<EmployeeItemDto>>
    {
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string Title { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Region { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
    }

    public class GetSearchEmployeesQueryHandler : IRequestHandler<GetSearchEmployeesQuery, List<EmployeeItemDto>>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetSearchEmployeesQueryHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public Task<List<EmployeeItemDto>> Handle(GetSearchEmployeesQuery request, CancellationToken cancellationToken)
        {
            var result = CreateEFQuery(_context.Employees, request)
                .ProjectTo<EmployeeItemDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            return result;
        }

        private IQueryable<Employee> CreateEFQuery(IQueryable<Employee> dbSet, GetSearchEmployeesQuery conditions)
        {
            var result = dbSet;
            if (!string.IsNullOrWhiteSpace(conditions.LastName))
            {
                result = result.Where(c => c.LastName.StartsWith(conditions.LastName));
            }
            if (!string.IsNullOrWhiteSpace(conditions.FirstName))
            {
                result = result.Where(c => c.FirstName.StartsWith(conditions.FirstName));
            }
            if (!string.IsNullOrWhiteSpace(conditions.Title))
            {
                result = result.Where(c => c.Title.StartsWith(conditions.Title));
            }
            if (!string.IsNullOrWhiteSpace(conditions.Address))
            {
                result = result.Where(c => c.Address.StartsWith(conditions.Address));
            }
            if (!string.IsNullOrWhiteSpace(conditions.City))
            {
                result = result.Where(c => c.City.StartsWith(conditions.City));
            }
            if (!string.IsNullOrWhiteSpace(conditions.Region))
            {
                result = result.Where(c => c.Region.StartsWith(conditions.Region));
            }
            if (!string.IsNullOrWhiteSpace(conditions.PostalCode))
            {
                result = result.Where(c => c.PostalCode.StartsWith(conditions.PostalCode));
            }
            if (!string.IsNullOrWhiteSpace(conditions.Country))
            {
                result = result.Where(c => c.Country.StartsWith(conditions.Country));
            }

            result = result.OrderBy(e => e.LastName).ThenBy(e => e.FirstName)
                .Skip((conditions.PageNumber - 1) * conditions.ItemsOnPage)
                .Take(conditions.ItemsOnPage);

            return result;
        }
    }
}
