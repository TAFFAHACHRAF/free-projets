using AutoMapper;
using nfcbackend.DTO;
using nfcbackend.Models;

namespace nfcbackend.Helpers
{
    public class AutoMapperProfile : AutoMapper.Profile
    {


        public AutoMapperProfile()
        {
            CreateMap<User, UserDTO>().ReverseMap();
            CreateMap<User, PostUserDTO>().ReverseMap();
            CreateMap<Company, CompanyDTO>().ReverseMap();
            CreateMap<Company, PostCompanyDTO>().ReverseMap();
            CreateMap<Account, AccountDTO>().ReverseMap();
            CreateMap<Account, AccountDTO>().ReverseMap();
            CreateMap<Account, PostAccountDTO>().ReverseMap();
            CreateMap<Models.Profile, ProfileDTO>().ReverseMap();
            CreateMap<Card, CardDTO>().ReverseMap();
            CreateMap<Social, SocialDTO>().ReverseMap();
        }
    }
}
