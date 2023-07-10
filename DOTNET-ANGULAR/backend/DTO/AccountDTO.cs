using nfcbackend.Helpers;
using nfcbackend.Models;
using System.ComponentModel.DataAnnotations;

namespace nfcbackend.DTO
{
    public class AccountDTO : Base
    {
        public AccountDTO()
        {
            accountType = AccountType.SoloUser;
            isActive = false;
        }
        //public AccountDTO(AccountType account)
        //{
        //    CurrentProfileNumber = 0;
        //    switch (account)
        //    {
        //        case AccountType.SoloUser:
        //            accountType = AccountType.SoloUser;
        //            MaxProfileNumber = 1;
        //            break;
        //        case AccountType.Company:
        //            accountType = AccountType.Company;
        //            MaxProfileNumber = 10;
        //            break;
        //        default:
        //            accountType = AccountType.Admin;
        //            break;
        //    }

        //    isActive = false;
        //}

        public AccountType? accountType { get; set; }
        [StringLength(150, MinimumLength = 10,
        ErrorMessage = "Mail field too short or too long.")]
        public string mail { get; set; }
        public string password { get; set; }
        public bool isActive { get; set; }
        public Guid SuscriberId { get; set; }

        public List<ProfileDTO>? Profiles { get; set; }

        public int? MaxProfileNumber { get; set; }

        public int? CurrentProfileNumber { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }



    }
}
