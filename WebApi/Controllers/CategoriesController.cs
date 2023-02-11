using Application.Categories.Queries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ApiBaseController
    {
        // GET: api/<CategoriesController>
        [HttpGet]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<List<CategoryItemDto>>> Get(int? pageNumber)
        {
            var request = new GetCategoriesQuery
            {
                PageNumber = pageNumber.HasValue && pageNumber > 0 ? pageNumber.Value : 1,
                ItemsOnPage = this.ItemsOnPage
            };
            return await Mediator.Send(request);
        }

        // GET api/<CategoriesController>/5
        [HttpGet("{id}")]
        [ProducesDefaultResponseType]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<CategoryDto>> Get(int id)
        {
            var request = new GetCategoryQuery { Id = id };
            var result = await Mediator.Send(request);
            if (result == null)
            {
                return NotFound();
            }
            return result;
        }

        // GET api/<CategoriesController>/search
        [HttpGet("search")]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<List<CategoryItemDto>>> Search(int? pageNumber, string name, string description)
        {
            if (string.IsNullOrWhiteSpace(name) && string.IsNullOrWhiteSpace(description))
            {
                return new List<CategoryItemDto>();
            }

            var request = new GetSearchCategoriesQuery
            {
                PageNumber = pageNumber.HasValue && pageNumber > 0 ? pageNumber.Value : 1,
                ItemsOnPage = this.ItemsOnPage,
                CategoryName = name?.Trim(),
                Description = description?.Trim()
            };
            return await Mediator.Send(request);
        }

        // POST api/<CategoriesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CategoriesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CategoriesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
