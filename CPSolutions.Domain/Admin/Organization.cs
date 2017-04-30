using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CPSolutions.Domain.Admin
{
    public class Organization
    {
        [BsonElement("_id")]
        public ObjectId Id { get; set; }
        [BsonElement("name")]
        public string Name { get; set; }
        [BsonElement("address")]
        public string Address { get; set; }
        [BsonElement("description")]
        public string Description { get; set; }
    }
}
