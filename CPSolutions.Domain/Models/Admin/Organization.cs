using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace CPSolutions.Domain.Models.Admin
{
    public class Organization
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}
