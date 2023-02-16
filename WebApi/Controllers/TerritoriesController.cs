using Application.Territories.Queries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TerritoriesController : ApiBaseController
    {
        // GET: api/<TerritoriesController>
        [HttpGet]
        public async Task<ActionResult<List<TerritoryItemDto>>> Get(int? pageNumber)
        {
            var request = new GetTerritoriesQuery
            {
                PageNumber = pageNumber.HasValue && pageNumber > 0 ? pageNumber.Value : 1,
                ItemsOnPage = this.ItemsOnPage
            };
            return await Mediator.Send(request);
        }

        // GET api/<TerritoriesController>/5
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<TerritoryDto>> Get(string id)
        {
            var request = new GetTerritoryQuery { Id = id };
            var result = await Mediator.Send(request);
            if (result == null)
            {
                return NotFound();
            }
            return result;
        }

        // GET: api/<TerritoriesController>/search
        [HttpGet("search")]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<List<TerritoryItemDto>>> Search(int? pageNumber,
            string description)
        {
            if (string.IsNullOrWhiteSpace(description))
            {
                return new List<TerritoryItemDto>();
            }

            var request = new GetSearchTerritoriesQuery
            {
                PageNumber = pageNumber.HasValue && pageNumber > 0 ? pageNumber.Value : 1,
                ItemsOnPage = this.ItemsOnPage,
                TerritoryDescription = description?.Trim()
            };
            return await Mediator.Send(request);
        }

        // POST api/<TerritoriesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<TerritoriesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<TerritoriesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
