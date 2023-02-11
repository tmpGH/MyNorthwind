using Application.Customers.Queries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ApiBaseController
    {
        // GET: api/<CustomersController>
        [HttpGet]
        public async Task<ActionResult<List<CustomerItemDto>>> GetAsync(int? pageNumber)
        {
            var request = new GetCustomersQuery
            {
                PageNumber = pageNumber.HasValue && pageNumber > 0 ? pageNumber.Value : 1,
                ItemsOnPage = this.ItemsOnPage
            };
            return await Mediator.Send(request);
        }

        // GET api/<CustomersController>/abc
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<CustomerDto>> Get(string id)
        {
            var request = new GetCustomerQuery { Id = id };
            var result = await Mediator.Send(request);
            if (result == null)
            {
                return NotFound();
            }
            return result;
        }

        // GET: api/<CustomersController>/search
        [HttpGet("search")]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<List<CustomerItemDto>>> Search(int? pageNumber,
            string name, string address, string city, string region, string postalCode, string country)
        {
            if (string.IsNullOrWhiteSpace(name) && string.IsNullOrWhiteSpace(address)
                && string.IsNullOrWhiteSpace(city) && string.IsNullOrWhiteSpace(region)
                && string.IsNullOrWhiteSpace(postalCode) && string.IsNullOrWhiteSpace(country)
                )
            {
                return new List<CustomerItemDto>();
            }

            var request = new GetSearchCustomersQuery
            {
                PageNumber = pageNumber.HasValue && pageNumber > 0 ? pageNumber.Value : 1,
                ItemsOnPage = this.ItemsOnPage,
                CompanyName = name?.Trim(),
                Address = address?.Trim(),
                City = city?.Trim(),
                Region = region?.Trim(),
                PostalCode = postalCode?.Trim(),
                Country = country?.Trim()
            };
            return await Mediator.Send(request);
        }

        // POST api/<CustomersController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CustomersController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CustomersController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
