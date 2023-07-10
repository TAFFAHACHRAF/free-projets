using nfcbackend.DTO;
using nfcbackend.Models;
namespace nfcbackend.Services
{
    public interface ICardService
    {
         Task<IEnumerable<CardDTO>> GetAllCards();
        Task<CardDTO> GetCardById(Guid id);
        Task CreateCard(CardDTO cardDTO);
        Task UpdateCard(Guid id, CardDTO cardDTO);
        Task DeleteCard(Guid id);
    }
}
