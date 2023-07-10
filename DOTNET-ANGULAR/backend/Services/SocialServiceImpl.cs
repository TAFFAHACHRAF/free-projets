using AutoMapper;
using nfcbackend.DTO;
using nfcbackend.Models;
using nfcbackend.Repositories;


namespace nfcbackend.Services
{
    public class SocialServiceImpl : ISocialService
    {
        private readonly ISocialRepository _socialRepository;
        private readonly IMapper _mapper;
        public SocialServiceImpl(ISocialRepository socialRepository, IMapper mapper)
        {
            _socialRepository = socialRepository;
            _mapper = mapper;
        }


        public async Task CreateSocial(SocialDTO socialDTO)
        {
            Social social =_mapper.Map<Social>(socialDTO);
            await _socialRepository.Add(social);
            
            
        }

        public async Task DeleteSocial(Guid id)
        {
            await _socialRepository.Delete(id);
        }
        public async Task<IEnumerable<SocialDTO>> GetAllSocials()
        {
            IEnumerable<Social> socials = await _socialRepository.GetAll();
            IEnumerable<SocialDTO> socialDTOs = _mapper.Map<IEnumerable<SocialDTO>>(socials);
            return socialDTOs;
        }

        public async Task UpdateSocial(Guid id, SocialDTO socialDTO)
        {
            Social existingSocial = await _socialRepository.GetById(id);
            if (existingSocial == null)
            {
                throw new Exception("card non trouvé");
            }
            _mapper.Map(socialDTO, existingSocial);

            await _socialRepository.Update(existingSocial, id);
        }


        public async Task<SocialDTO> GetSocialById(Guid id)
        {
            Social social = await _socialRepository.GetById(id);
            if (social == null)
            {
                return null;
            }
            SocialDTO socialDTO = _mapper.Map<SocialDTO>(social);
            return socialDTO;
        }



    }
}
