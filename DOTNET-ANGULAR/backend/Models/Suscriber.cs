using System.Text.Json.Serialization;

namespace nfcbackend.Models
{
    public class Suscriber : Base
    {

        
        public Account account { get; set; }

        public DateTime? CreatedAt { get; set; }

        public DateTime? UpdatedAt { get; set; }



    }
}
