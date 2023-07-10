using nfcbackend.Helpers;
using nfcbackend.Models;

namespace nfcbackend.DTO
{
    public class SocialDTO:Base
    {
        public SocialPlatform SocialPlatform { get; set; }
        public string SocialUrl { get; set; }
        public Guid ProfileId { get; set; }
    }

}
