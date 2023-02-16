using Application.Suppliers.Queries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SuppliersController : ApiBaseController
    {
        // GET: api/<SuppliersController>
        [HttpGet]
        public async Task<ActionResult<List<SupplierItemDto>>> Get(int? pageNumber)
        {
            var request = new GetSuppliersQuery
            {
                PageNumber = pageNumber.HasValue && pageNumber > 0 ? pageNumber.Value : 1,
                ItemsOnPage = this.ItemsOnPage
            };
            return await Mediator.Send(request);
        }

        // GET api/<SuppliersController>/5
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<SupplierDto>> Get(int id)
        {
            var request = new GetSupplierQuery { Id = id };
            var result = await Mediator.Send(request);
            if (result == null)
            {
                return NotFound();
            }
            return result;
        }

        // GET: api/<SuppliersController>/search
        [HttpGet("search")]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<List<SupplierItemDto>>> Search(int? pageNumber,
            string name, string address, string city, string region, string postalCode, string country)
        {
            if (string.IsNullOrWhiteSpace(name) && string.IsNullOrWhiteSpace(address)
                && string.IsNullOrWhiteSpace(city) && string.IsNullOrWhiteSpace(region)
                && string.IsNullOrWhiteSpace(postalCode) && string.IsNullOrWhiteSpace(country)
                )
            {
                return new List<SupplierItemDto>();
            }

            var request = new GetSearchSuppliersQuery
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

        // POST api/<SuppliersController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<SuppliersController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<SuppliersController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
