using CPSolutions.Domain.Models.Admin;
using CPSolutions.Domain.RepositoryContracts.Admin;
using CPSolutions.Domain.Services.Admin;
using System;
using System.Collections.Generic;

namespace CPSolutions.Application.AppServices.Admin
{
    public class OrganizationAppService
    {
        private IOrganizationRepository _organizationRepository;
        private OrganizationService _organizationService;

        public OrganizationAppService(IOrganizationRepository organizationRepository,
            OrganizationService organizationService)
        {
            _organizationRepository = organizationRepository;
            _organizationService = organizationService;
        }

        public IList<Organization> GetAll()
        {
            return _organizationRepository.GetAll();
        }

        public Organization Add(Organization organization)
        {
            return _organizationService.Add(organization);
        }

        public void Update(Organization organizationDto, Organization organization)
        {
            organization.Name = organizationDto.Name;
            organization.Address = organizationDto.Address;
            organization.Description = organizationDto.Description;
            organization.ModifiedDate = DateTime.Now;

            _organizationService.Update(organization);
        }
    }
}
