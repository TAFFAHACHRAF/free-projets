using nfcbackend.Helpers;
using nfcbackend.Models;
using System.ComponentModel.DataAnnotations;

namespace nfcbackend.DTO
{
    public class PostAccountDTO : Base
    {
        public PostAccountDTO()
        {
            accountType = AccountType.SoloUser;
            isActive = false;
        }

        public AccountType? accountType { get; set; }

        [StringLength(150, MinimumLength = 10,
        ErrorMessage = "Mail field too short or too long.")]
        public string mail { get; set; }
        public string password { get; set; }
        public bool isActive { get; set; }
        public Guid SuscriberId { get; set; }


        public int? MaxProfileNumber { get; set; }

        public int? CurrentProfileNumber { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }
    }
}
