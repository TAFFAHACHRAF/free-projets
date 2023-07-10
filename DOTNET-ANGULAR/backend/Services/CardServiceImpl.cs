using AutoMapper;
using nfcbackend.DTO;
using nfcbackend.Models;
using nfcbackend.Repositories;

namespace nfcbackend.Services
{
    public class CardServiceImpl : ICardService
    {
        private readonly IMapper _mapper;
        private readonly ICardRepository _cardRepository;

        public CardServiceImpl(ICardRepository cardRepository, IMapper mapper)
        {
            _cardRepository = cardRepository;
            _mapper = mapper;
        }

        public async Task CreateCard(CardDTO cardDTO)
        {
            Card card = _mapper.Map<Card>(cardDTO);
            await _cardRepository.Add(card);
        }

        public async Task DeleteCard(Guid id)
        {
            await _cardRepository.Delete(id);
        }

        public async Task<IEnumerable<CardDTO>> GetAllCards()
        {
            IEnumerable<Card> cards = await _cardRepository.GetAll();
            IEnumerable<CardDTO> cardDTOs = _mapper.Map<IEnumerable<CardDTO>>(cards);
            return cardDTOs;
        }

        public async Task<CardDTO> GetCardById(Guid id)
        {
            Card card = await _cardRepository.GetById(id);
            if (card == null)
            {
                return null;
            }
            CardDTO cardDTO = _mapper.Map<CardDTO>(card);
            return cardDTO;
        }

        //public async Task UpdateCard(Guid id, CardDTO cardDTO)
        //{
        //    Card existingCard = await _cardRepository.GetById(id);
        //    if (existingCard == null)
        //    {
        //        throw new Exception("Card not found");
        //    }
            

        //    await _cardRepository.Update(existingCard, id);
        //}
        public async Task UpdateCard(Guid id, CardDTO cardDTO)
        {
            Card existingCard = await _cardRepository.GetById(id);
            if (existingCard == null)
            {
                throw new Exception("Card not found");
            }

            existingCard.isActive = cardDTO.IsActive; // Mettre à jour le champ IsActive avec la valeur de cardDTO

            await _cardRepository.Update(existingCard, id);
        }




    }
}
