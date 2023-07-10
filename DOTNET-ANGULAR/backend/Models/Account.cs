using Microsoft.AspNetCore.Identity;
using nfcbackend.Helpers;
using System;
using System.ComponentModel.DataAnnotations;
using System.Security.Cryptography;
using System.Text.Json.Serialization;

namespace nfcbackend.Models
{
    public class Account : Base
    {
        public Account()
        {
            CurrentProfileNumber = 0;
            accountType = AccountType.SoloUser;
            isActive = false;
        }
        //public Account(AccountType account)
        //{
        //    CurrentProfileNumber = 0;
        //    switch (account)
        //    {
        //        case AccountType.Company:
        //            accountType = AccountType.Company;
        //            MaxProfileNumber = 10;
        //            break;
        //        case AccountType.Admin:
        //            accountType = AccountType.Admin;
        //            MaxProfileNumber = 0;
        //            break;
        //        default:
        //            accountType = AccountType.SoloUser;
        //            MaxProfileNumber = 1;
        //            break;
        //    }
            
        //    isActive = false;
        //}

        public AccountType accountType { get;set; }

        [StringLength(150, MinimumLength = 10,
        ErrorMessage = "Mail field too short or too long.")]
        public string mail { get; set; }
        public string password { get; set; }
        public bool isActive { get; set; }
        
        public Guid SuscriberId { get; set; }

        [JsonIgnore]
        public Suscriber? Suscriber { get; set; }

        public List<Profile>? Profiles { get; set; }

        public int? MaxProfileNumber { get; set; }

        public int? CurrentProfileNumber { get; set; }

        public DateTime? CreatedAt { get; set; }

        public DateTime? UpdatedAtu { get; set; }



    }
}
