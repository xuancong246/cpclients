using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using CPSolutions.Domain.Models.Admin;
using CPSolutions.Application.AppServices.Admin;
using CPSolutions.Domain.RepositoryContracts.Admin;
using System.Web.Http;
using System.Net.Http;
using System.Net;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace CPSolutions.Api.Controllers.Admin
{
    [Route("api/organizations")]
    public class OrganizationsController : ApiController
    {
        OrganizationAppService _organizationAppService;
        IOrganizationRepository _organizationRepository;

        public OrganizationsController(OrganizationAppService organizationAppService,
            IOrganizationRepository organizationRepository)
        {
            _organizationAppService = organizationAppService;
            _organizationRepository = organizationRepository;
        }

        // GET: api/organizations
        [HttpGet]
        public IEnumerable<Organization> Get()
        {
            return _organizationAppService.GetAll();
        }

        // GET api/organizations/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/organizations
        [HttpPost]
        public Organization Post([FromBody]Organization organization)
        {
            return _organizationAppService.Add(organization);
        }

        // PUT api/organizations/5
        [Route("{id}")]
        [HttpPut]
        public HttpResponseMessage Put([FromBody]Organization organizationDto)
        {
            var organization = _organizationRepository.Get(organizationDto.Id);
            if (organization == null)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, $"Organization {organizationDto.Id} not found");
            }
            _organizationAppService.Update(organizationDto, organization);
            return new HttpResponseMessage(HttpStatusCode.OK);
        }

        // DELETE api/organizations/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
