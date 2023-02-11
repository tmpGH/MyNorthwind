using Application.Employees.Queries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ApiBaseController
    {
        // GET: api/<EmployeesController>
        [HttpGet]
        public async Task<ActionResult<List<EmployeeItemDto>>> Get(int? pageNumber)
        {
            var request = new GetEmployeesQuery
            {
                PageNumber = pageNumber.HasValue && pageNumber > 0 ? pageNumber.Value : 1,
                ItemsOnPage = this.ItemsOnPage
            };
            return await Mediator.Send(request);
        }

        // GET api/<EmployeesController>/5
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<EmployeeDto>> Get(int id)
        {
            var request = new GetEmployeeQuery { Id = id };
            var result = await Mediator.Send(request);
            if (result == null)
            {
                return NotFound();
            }
            return result;
        }

        // GET: api/<EmployeesController>/search
        [HttpGet("search")]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<List<EmployeeItemDto>>> Search(int? pageNumber,
            string lastName, string firstName, string title, string address, string city, string region, string postalCode, string country)
        {
            var request = new GetSearchEmployeesQuery
            {
                PageNumber = pageNumber.HasValue && pageNumber > 0 ? pageNumber.Value : 1,
                ItemsOnPage = this.ItemsOnPage,
                LastName = lastName?.Trim(),
                FirstName = firstName?.Trim(),
                Title = title?.Trim(),
                Address = address?.Trim(),
                City = city?.Trim(),
                Region = region?.Trim(),
                PostalCode = postalCode?.Trim(),
                Country = country?.Trim()
            };
            return await Mediator.Send(request);
        }

        // POST api/<EmployeesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<EmployeesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<EmployeesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
