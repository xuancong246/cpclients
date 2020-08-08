using CPSolutions.Domain.Models.Admin;
using CPSolutions.Domain.RepositoryContracts.Admin;
using System;

namespace CPSolutions.Domain.Services.Admin
{
    public class OrganizationService
    {
        private IOrganizationRepository _organizationRepository;

        public OrganizationService(IOrganizationRepository organizationRepository)
        {
            _organizationRepository = organizationRepository;
        }

        public Organization Add(Organization organization)
        {
            organization.Id = null;
            organization.CreatedDate = DateTime.Now;
            organization.ModifiedDate = DateTime.Now;
            return _organizationRepository.Add(organization);
        }

        public void Update(Organization organization)
        {
            _organizationRepository.Update(organization);
        }
    }
}
