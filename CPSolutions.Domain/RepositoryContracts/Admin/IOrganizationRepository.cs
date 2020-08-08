using CPSolutions.Domain.Models.Admin;
using System.Collections.Generic;

namespace CPSolutions.Domain.RepositoryContracts.Admin
{
    public interface IOrganizationRepository
    {
        IList<Organization> GetAll();
        Organization Get(string id);
        Organization Add(Organization organization);
        void Update(Organization organization);
    }
}
