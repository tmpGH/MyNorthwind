using Application.Products.Queries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ApiBaseController
    {
        // GET: api/<ProductsController>
        [HttpGet]
        public async Task<ActionResult<List<ProductItemDto>>> Get(int? pageNumber)
        {
            var request = new GetProductsQuery
            {
                PageNumber = pageNumber.HasValue && pageNumber > 0 ? pageNumber.Value : 1,
                ItemsOnPage = this.ItemsOnPage
            };
            return await Mediator.Send(request);
        }

        // GET api/<ProductsController>/5
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<ProductDto>> Get(int id)
        {
            var request = new GetProductQuery { Id = id };
            var result = await Mediator.Send(request);
            if (result == null)
            {
                return NotFound();
            }
            return result;
        }

        // GET: api/<ProductsController>/search
        [HttpGet("search")]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<List<ProductItemDto>>> Search(int? pageNumber,
            string name, decimal? unitPrice)
        {
            var request = new GetSearchProductsQuery
            {
                PageNumber = pageNumber.HasValue && pageNumber > 0 ? pageNumber.Value : 1,
                ItemsOnPage = this.ItemsOnPage,
                ProductName = name?.Trim(),
                UnitPrice = unitPrice
            };
            return await Mediator.Send(request);
        }

        // POST api/<ProductsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ProductsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ProductsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
