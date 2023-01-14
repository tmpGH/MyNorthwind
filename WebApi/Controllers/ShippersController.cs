﻿using Application.Shippers.Queries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShippersController : ApiBaseController
    {
        // GET: api/<ShippersController>
        [HttpGet]
        public async Task<ActionResult<List<ShipperItemDto>>> Get(int? pageNumber)
        {
            var request = new GetShippersQuery
            {
                PageNumber = pageNumber.HasValue && pageNumber > 0 ? pageNumber.Value : 1,
                ItemsOnPage = this.ItemsOnPage
            };
            return await Mediator.Send(request);
        }

        // GET api/<ShippersController>/5
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<ShipperDto>> Get(int id)
        {
            var request = new GetShipperQuery { Id = id };
            var result = await Mediator.Send(request);
            if (result == null)
            {
                return NotFound();
            }
            return result;
        }

        // POST api/<ShippersController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ShippersController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ShippersController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
