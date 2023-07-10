using Microsoft.AspNetCore.Http;
using nfcbackend.Models;

namespace nfcbackend.DTO
{
    public class ProfileDTO:Base
    {
        public bool IsActive { get; set; }
        public int TemplateIndex { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string Adress { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public Guid? AccountId { get; set; }
        public List<CardDTO>? Cards { get; set; }
        public List<SocialDTO>? Socials { get; set; }
        
        public string ImagePath { get; set; }
        public float Lattitude { get; set; }
        public float Longitude { get; set; }



    }
}
