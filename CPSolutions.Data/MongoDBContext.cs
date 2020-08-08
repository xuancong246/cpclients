using CPSolutions.Domain.Models.Admin;
using MongoDB.Driver;

namespace CPSolutions.Data
{
    public class MongoDBContext
    {
        private IMongoDatabase _db;

        public MongoDBContext()
        {
            MongoClient client = new MongoClient("mongodb://root:P%40ssw0rd@localhost:27017/admin");
            _db = client.GetDatabase("cpsolutions");
        }

        public IMongoCollection<Organization> OrganizationCollection => GetCollection<Organization>(name: "organizations");

        private IMongoCollection<T> GetCollection<T>(string name) {
            return _db.GetCollection<T>(name);
        }
    }
}
