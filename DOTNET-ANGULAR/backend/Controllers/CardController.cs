using Microsoft.AspNetCore.Mvc;
using nfcbackend.DTO;
using nfcbackend.Models;
using nfcbackend.Repositories;
using nfcbackend.Services;
using System.Security.Principal;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.CodeAnalysis.Diagnostics;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace nfcbackend.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CardController : ControllerBase
    {
      private readonly ICardService _cardService;

        public CardController(ICardService cardService)
        {
            _cardService = cardService;
        }


        // GET: api/<CardController>
        [HttpGet]
        public async Task<IActionResult> GetAllCards()
        {
            try
            {
                IEnumerable<CardDTO> cards = await _cardService.GetAllCards();
                return Ok(cards);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Une erreur s'est produite lors de la récupération de tous les cards : {ex.Message}");
            }
        }
        // GET api/<CardController>/id
        [HttpGet("{id}")]
          public async Task<IActionResult> GetCardById(Guid id)
        {
            try
            {
                CardDTO card = await _cardService.GetCardById(id);
                if (card == null)
                    return NotFound();

                return Ok(card);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Une erreur s'est produite lors de  la récupération du card avec l'ID {id} : {ex.Message}");
            }
        }
        // POST api/<CardController>
        [HttpPost]
        public async Task<IActionResult> CreateCard([FromBody] CardDTO cardDTO)
        {
            try {
                await _cardService.CreateCard(cardDTO);
                return CreatedAtAction(nameof(GetCardById), new { id = cardDTO.ProfileId }, cardDTO);
            }
            catch(Exception ex)
            {
                return StatusCode(500,$"Une erreur s'est produite lors de la creation du card : {ex.Message}");
            }
            
        }

        // PUT api/<CardController>/id
        [HttpPut("{id}")]
       public async Task<IActionResult> UpdateCard(Guid id, CardDTO cardDTO)
        {
            try
            {
                await _cardService.UpdateCard(id, cardDTO);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Une erreur s'est produite lors de  la mise à jour de la card avec l'ID {id} : {ex.Message}");
            }
        }

        // DELETE api/<CardController>/id
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCard(Guid id)
        {
            try
            {
                await _cardService.DeleteCard(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Une erreur s'est produite lors de  la suppression du card avec l'ID {id} : {ex.Message}");
            }
        }
    }
}
