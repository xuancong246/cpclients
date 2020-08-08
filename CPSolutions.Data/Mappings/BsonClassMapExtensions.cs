using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.IdGenerators;
using MongoDB.Bson.Serialization.Serializers;

namespace CPSolutions.Data.Mappings
{
    public static class BsonClassMapExtensions
    {
        public static void MapStringIdProperty(this BsonClassMap map) {
            map.MapIdProperty("Id")
                .SetIgnoreIfDefault(true)
                .SetIdGenerator(StringObjectIdGenerator.Instance);
            map.IdMemberMap
                .SetSerializer(new StringSerializer(BsonType.ObjectId));
        }
    }
}
