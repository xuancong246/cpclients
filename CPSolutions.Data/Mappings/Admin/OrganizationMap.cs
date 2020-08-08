using CPSolutions.Domain.Models.Admin;
using MongoDB.Bson.Serialization;

namespace CPSolutions.Data.Mappings.Admin
{
    public class OrganizationMap
    {
        public OrganizationMap()
        {
            BsonClassMap.RegisterClassMap<Organization>(cm =>
            {
                cm.AutoMap();
                cm.MapStringIdProperty();
            });
        }
    }
}
