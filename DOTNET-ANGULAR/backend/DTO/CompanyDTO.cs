using nfcbackend.Models;

namespace nfcbackend.DTO
{
    public class CompanyDTO : Base
    {
        public CompanyDTO()
        {
        }

        public string companyName { get; set; }
        public string companyAddress { get; set; }
        public string? companyPhoneNumber { get; set; }

        public AccountDTO? account { get; set; }

        public DateTime? CreatedAt { get; set; }

        public DateTime? UpdatedAt { get; set; }
    }
}
