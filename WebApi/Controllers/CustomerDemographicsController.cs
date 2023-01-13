using Application.CustomerDemographics.Queries;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerDemographicsController : ApiBaseController
    {
        // GET: api/<CustomerDemographicsController>
        [HttpGet]
        public async Task<ActionResult<List<CustomerDemographicItemDto>>> GetAsync(int? pageNumber)
        {
            var request = new GetCustomerDemographicsQuery
            {
                PageNumber = pageNumber.HasValue && pageNumber > 0 ? pageNumber.Value : 1,
                ItemsOnPage = this.ItemsOnPage
            };
            return await Mediator.Send(request);
        }

        // GET api/<CustomerDemographicsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<CustomerDemographicsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CustomerDemographicsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CustomerDemographicsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
