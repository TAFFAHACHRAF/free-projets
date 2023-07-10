using nfcbackend.DTO;
using nfcbackend.Models;
namespace nfcbackend.Services
{
    public interface ISocialService
    {
        
        Task<IEnumerable<SocialDTO>> GetAllSocials();
        Task<SocialDTO> GetSocialById(Guid id);
        Task CreateSocial(SocialDTO socialDTO);
        Task UpdateSocial(Guid id, SocialDTO socialDTO);
        Task DeleteSocial(Guid id);
    }
}
