using AutoMapper;
using nfcbackend.DTO;
using nfcbackend.Models;
using nfcbackend.Repositories;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace nfcbackend.Services
{
    public class ProfileServiceImpl : IProfileService
    
    {
        private readonly IProfileRepository _profileRepository;
        private readonly IMapper _mapper;
        

        public ProfileServiceImpl(IProfileRepository profileRepository, IMapper mapper)
        {
            _profileRepository = profileRepository;
            _mapper = mapper;
        }

        public async Task CreateProfile(ProfileDTO profileDTO)
        {
            Models.Profile profile = _mapper.Map<Models.Profile>(profileDTO);
            await _profileRepository.Add(profile);
        }

        public async Task DeleteProfile(Guid id)
        {
            await _profileRepository.Delete(id);
        }

        public async Task<IEnumerable<Card>> GetAllCardsByProfile(Guid profileId)
        {
            return await _profileRepository.GetAllCardByProfile(profileId);
        }

        public async Task<IEnumerable<ProfileDTO>> GetAllProfiles()
        {
            IEnumerable<Models.Profile> profiles = await _profileRepository.GetAll();
            IEnumerable<ProfileDTO> profileDTOs = _mapper.Map<IEnumerable<ProfileDTO>>(profiles);
            return profileDTOs;
        }

        public async Task<IEnumerable<Social>> GetAllSocialsByProfile(Guid profileId)
        {
            return await _profileRepository.GetAllSocialByProfile(profileId);
        }

        public async Task<ProfileDTO> GetProfileById(Guid id)
        {
            Models.Profile profile = await _profileRepository.GetById(id);
            if (profile == null)
            {
                // Gérer le cas où le profil n'est pas trouvé
                return null;
            }
            ProfileDTO profileDTO = _mapper.Map<ProfileDTO>(profile);
            return profileDTO;
        }

        public async Task UpdateProfile(Guid id, ProfileDTO profileDTO)
        {
            Models.Profile existingProfile = await _profileRepository.GetById(id);
            if (existingProfile == null)
            {
                // Gérer le cas où le profil n'est pas trouvé
                throw new Exception("Profil non trouvé");
            }

            Models.Profile updatedProfile = _mapper.Map<Models.Profile>(profileDTO);
            existingProfile.IsActive = updatedProfile.IsActive;
            existingProfile.TemplateIndex = updatedProfile.TemplateIndex;
            existingProfile.FirstName = updatedProfile.FirstName;
            existingProfile.LastName = updatedProfile.LastName;
            existingProfile.PhoneNumber = updatedProfile.PhoneNumber;
            existingProfile.Adress = updatedProfile.Adress;
            existingProfile.UpdateAt = DateTime.Now;
            existingProfile.Lattitude = updatedProfile.Lattitude;
            existingProfile.Cards = updatedProfile.Cards;
            existingProfile.ImagePath = updatedProfile.ImagePath;
            existingProfile.Socials = updatedProfile.Socials;

            await _profileRepository.Update(existingProfile, id);
        }





    }
}

