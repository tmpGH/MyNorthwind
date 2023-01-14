using Application.Common.Interfaces;
using AutoMapper;
using MediatR;
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
        private readonly IMapper _mapper;

        public GetEmployeeQueryHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<EmployeeDto> Handle(GetEmployeeQuery request, CancellationToken cancellationToken)
        {
            var entity = await _context.Employees.FindAsync(request.Id);

            return _mapper.Map<EmployeeDto>(entity);
        }
    }
}
