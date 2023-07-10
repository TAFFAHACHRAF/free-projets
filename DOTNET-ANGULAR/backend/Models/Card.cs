using System.Text.Json.Serialization;

namespace nfcbackend.Models
{
    public class Card : Base
    {
        public bool isActive { get; set; }

        public Guid ProfileId { get; set; }

        [JsonIgnore]
        public Profile Profile { get; set; }
    }
}
