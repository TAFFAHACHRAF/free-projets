using nfcbackend.Models;

namespace nfcbackend.DTO
{
    public class UserDTO : Base
    {
        public UserDTO()
        {
        }

        public string firstName { get; set; }

        public string lastName { get; set; }

        public string phoneNumber { get; set; }

        public string address { get; set; }

        public DateTime birth { get; set; }


        public AccountDTO? account { get; set; }

        public DateTime? CreatedAt { get; set; }

        public DateTime? UpdatedAt { get; set; }

    }
}
