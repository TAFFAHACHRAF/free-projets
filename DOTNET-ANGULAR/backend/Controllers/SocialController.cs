using Microsoft.AspNetCore.Mvc;
using nfcbackend.DTO;
using nfcbackend.Models;
using nfcbackend.Repositories;
using nfcbackend.Services;
using System.Security.Principal;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;

namespace nfcbackend.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class SocialController : ControllerBase
    {
        private readonly ISocialService _socialService;

        public SocialController(ISocialService socialService)
        {
            _socialService = socialService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllSocials()
        {
            try
            {
                IEnumerable<SocialDTO> socials = await _socialService.GetAllSocials();
                return Ok(socials);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Une erreur s'est produite lors de la récupération de tous les sociaux : {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetSocialById(Guid id)
        {
            try
            {
                SocialDTO social = await _socialService.GetSocialById(id);
                if (social == null)
                    return NotFound();

                return Ok(social);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Une erreur s'est produite lors de la récupération de social avec l'ID {id} : {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreateSocial([FromBody] SocialDTO socialDTO)
        {
            try
            {
                await _socialService.CreateSocial(socialDTO);
                return CreatedAtAction(nameof(GetSocialById), new { id = socialDTO.ProfileId }, socialDTO);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return StatusCode(500, "Une erreur s'est produite lors de la création du profil social.");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSocial(Guid id, [FromBody] SocialDTO socialDTO)
        {
            try
            {
                await _socialService.UpdateSocial(id, socialDTO);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Une erreur s'est produite lors de la mise à jour  de social avec l'ID {id} : {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSocial(Guid id)
        {
            try
            {
                await _socialService.DeleteSocial(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Une erreur s'est produite lors de la suppression social avec l'ID {id} : {ex.Message}");

            }
        }
    }
}
