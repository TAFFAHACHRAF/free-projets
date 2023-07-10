using Microsoft.AspNetCore.Mvc;
using nfcbackend.Models;
using nfcbackend.DTO;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using nfcbackend.Services;


namespace nfcbackend.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        private readonly IProfileService _profileService;

        public ProfileController(IProfileService profileService)
        {
            _profileService = profileService;
        }


        // GET: api/<ProfileController>
        [HttpGet]
        public async Task<IActionResult> GetAllProfiles()
        {
            try
            {
                
                IEnumerable<ProfileDTO> profiles = await _profileService.GetAllProfiles();
                return Ok(profiles);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Une erreur s'est produite lors de la récupération de tous les profils : {ex.Message}");
            }
        }

        // GET api/<ProfileController>/id
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProfileById(Guid id)
        {
            try
            {
                ProfileDTO profile = await _profileService.GetProfileById(id);
                if (profile == null)
                {
                    return NotFound();
                }
                return Ok(profile);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Une erreur s'est produite lors de la récupération du profil avec l'ID {id} : {ex.Message}");
            }
        }

        // POST api/<ProfileController>
       
        [HttpPost]
        public async Task<IActionResult> CreateProfile( ProfileDTO profileDTO)
        {
            try
            {
                string imagePath = await SaveImage(profileDTO.ImagePath);

                // Mettre à jour le chemin de l'image dans le profilDTO
                profileDTO.ImagePath = imagePath;

                await _profileService.CreateProfile(profileDTO);
                return CreatedAtAction(nameof(GetProfileById), new { id = profileDTO.FirstName }, profileDTO);
            }
            catch (Exception ex)
            {
                // Gérer les exceptions appropriées et retourner une réponse d'erreur
                return StatusCode(500, $"Une erreur s'est produite lors de la création du profil : {ex.Message}");
            }
        }



        // PUT api/<ProfileController>/id
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProfile(Guid id, ProfileDTO profileDTO)
        {
            try
            {
                var existingProfile = await _profileService.GetProfileById(id);
                await _profileService.UpdateProfile(id, profileDTO);
                return NoContent();
            }
            catch (Exception ex)
            {
                // Gérer les exceptions appropriées et retourner une réponse d'erreur
                return StatusCode(500, $"Une erreur s'est produite lors de la mise à jour du profil avec l'ID {id} : {ex.Message}");
            }
        }

        // DELETE api/<ProfileController>/id
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProfile(Guid id)
        {
            try
            {
                await _profileService.DeleteProfile(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Une erreur s'est produite lors de la suppression du profil avec l'ID {id} : {ex.Message}");
            }
        }

        [HttpGet("{profileId}/socials")]
        public async Task<IActionResult> GetAllSocialsByProfile(Guid profileId)
        {
            try
            {
                IEnumerable<Social> socials = await _profileService.GetAllSocialsByProfile(profileId);
                return Ok(socials);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Une erreur s'est produite lors de la récupération des réseaux sociaux pour le profil avec l'ID {profileId} : {ex.Message}");
            }
        }

        [HttpGet("{profileId}/cards")]
        public async Task<IActionResult> GetAllCardsByProfile(Guid profileId)
        {
            try
            {
                IEnumerable<Card> cards = await _profileService.GetAllCardsByProfile(profileId);
                return Ok(cards);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Une erreur s'est produite lors de la récupération des cartes pour le profil avec l'ID {profileId} : {ex.Message}");
            }
        }

        private async Task<string> SaveImage(string imagePath)
        {
            if (string.IsNullOrEmpty(imagePath))
            {
                throw new ArgumentException("Le chemin d'accès de l'image est manquant ou invalide.");
            }

            // Vérifier si le fichier existe
            if (!System.IO.File.Exists(imagePath))
            {
                throw new FileNotFoundException("Le fichier spécifié n'existe pas.");
            }

            // Générer un nom de fichier unique pour éviter les collisions
            string fileName = Guid.NewGuid().ToString() + Path.GetExtension(imagePath);

            // Construire le chemin complet du fichier en utilisant le dossier "Images" de votre application
            string destinationPath = Path.Combine("C:\\Users\\acer\\source\\repos\\nfcbackend\\Images", fileName);


            try
            {
                // Copier le fichier vers le dossier de destination
                System.IO.File.Copy(imagePath, destinationPath);

                return destinationPath;
            }
            catch (Exception ex)
            {
                // Gérer les erreurs de copie de fichier
                throw new Exception("Une erreur s'est produite lors de la copie du fichier : " + ex.Message);
            }
        }



       


    }
}