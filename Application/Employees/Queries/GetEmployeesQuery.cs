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

namespace Application.Employees.Queries
{
    public class GetEmployeesQuery : PageableQuery, IRequest<List<EmployeeItemDto>>
    { }

    public class GetEmployeesQueryHandler : IRequestHandler<GetEmployeesQuery, List<EmployeeItemDto>>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetEmployeesQueryHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public Task<List<EmployeeItemDto>> Handle(GetEmployeesQuery request, CancellationToken cancellationToken)
        {
            var result = _context.Employees
                .Skip((request.PageNumber - 1) * request.ItemsOnPage)
                .Take(request.ItemsOnPage)
                .ProjectTo<EmployeeItemDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            return result;
        }
    }


}
