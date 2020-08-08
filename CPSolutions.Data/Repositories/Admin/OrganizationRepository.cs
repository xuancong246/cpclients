using CPSolutions.Domain.Models.Admin;
using CPSolutions.Domain.RepositoryContracts.Admin;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace CPSolutions.Data.Repositories.Admin
{
    public class OrganizationRepository : IOrganizationRepository
    {
        private MongoDBContext context;

        public OrganizationRepository()
        {
            context = new MongoDBContext();
        }

        public IList<Organization> GetAll()
        {
            return context.OrganizationCollection.Find(_ => true).ToList();
        }

        public Organization Get(string id)
        {
            return context.OrganizationCollection.FindSync(p => p.Id == id).FirstOrDefault();
        }

        public Organization Add(Organization organization)
        {
            context.OrganizationCollection.InsertOne(organization);
            return organization;
        }

        public void Update(Organization organization) {
            context.OrganizationCollection.ReplaceOne(o => o.Id == organization.Id,
                organization, new UpdateOptions { IsUpsert = true });
        }
    }
}
