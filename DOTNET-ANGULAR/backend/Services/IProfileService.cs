using nfcbackend.DTO;
using nfcbackend.Models;

namespace nfcbackend.Services
{
    public interface IProfileService
    {
        Task<IEnumerable<ProfileDTO>> GetAllProfiles();
        Task<ProfileDTO> GetProfileById(Guid id);
        Task CreateProfile(ProfileDTO profileDTO);
        Task UpdateProfile(Guid id, ProfileDTO profileDTO);
        Task DeleteProfile(Guid id);
        Task<IEnumerable<Social>> GetAllSocialsByProfile(Guid profileId);
        Task<IEnumerable<Card>> GetAllCardsByProfile(Guid profileId);
       
    }
}
