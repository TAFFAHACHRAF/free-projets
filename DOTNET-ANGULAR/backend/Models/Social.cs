using nfcbackend.Helpers;
using System.Text.Json.Serialization;

namespace nfcbackend.Models
{
    public class Social:Base
    {
        public Social()
        {
            socialPlatform = SocialPlatform.Linkedin;
        }
        public SocialPlatform socialPlatform { get; set; }
        public string SocialUrl { get; set; }

        [JsonIgnore]
        public Profile Profile { get; set; }

      
        public Guid ProfileId { get; set; }

    }
}
