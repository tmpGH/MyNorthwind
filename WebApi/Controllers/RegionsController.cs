using Application.Regions.Queries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegionsController : ApiBaseController
    {
        // GET: api/<RegionsController>
        [HttpGet]
        public async Task<ActionResult<List<RegionItemDto>>> Get(int? pageNumber)
        {
            var request = new GetRegionsQuery
            {
                PageNumber = pageNumber.HasValue && pageNumber > 0 ? pageNumber.Value : 1,
                ItemsOnPage = this.ItemsOnPage
            };
            return await Mediator.Send(request);
        }

        // GET api/<RegionsController>/5
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<RegionDto>> Get(int id)
        {
            var request = new GetRegionQuery { Id = id };
            var result = await Mediator.Send(request);
            if (result == null)
            {
                return NotFound();
            }
            return result;
        }

        // GET: api/<RegionsController>/search
        [HttpGet("search")]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<List<RegionItemDto>>> Search(int? pageNumber,
            string description)
        {
            if (string.IsNullOrWhiteSpace(description))
            {
                return new List<RegionItemDto>();
            }

            var request = new GetSearchRegionsQuery
            {
                PageNumber = pageNumber.HasValue && pageNumber > 0 ? pageNumber.Value : 1,
                ItemsOnPage = this.ItemsOnPage,
                RegionDescription = description?.Trim()
            };
            return await Mediator.Send(request);
        }

        // POST api/<RegionsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<RegionsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<RegionsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
