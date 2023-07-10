using System.Text.Json.Serialization;

namespace nfcbackend.Models
{
    public class Profile:Base
    {
        public bool IsActive { get; set; }
        public int TemplateIndex { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string Adress { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdateAt { get; set; }
        public ICollection<Social>? Socials { get; set; }
        public ICollection<Card>? Cards { get; set; }

        [JsonIgnore]
        public Account? Account { get; set; }
        public Guid? AccountId { get; set; }
        public string ImagePath { get; set; }
        public float Lattitude { get; set; }
        public float Longitude { get; set; }
        

    }
}
