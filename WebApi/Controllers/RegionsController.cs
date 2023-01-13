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
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<RegionsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
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
