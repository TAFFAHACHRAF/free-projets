using nfcbackend.Models;

namespace nfcbackend.DTO
{
    public class PostCompanyDTO : Base
    {
        public string companyName { get; set; }
        public string companyAddress { get; set; }
        public string? companyPhoneNumber { get; set; }

        public PostAccountDTO account { get; set; }

        public DateTime? CreatedAt { get; set; }

        public DateTime? UpdatedAt { get; set; }
    }
}
