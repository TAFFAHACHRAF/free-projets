using Microsoft.AspNetCore.Mvc;
using nfcbackend.DTO;
using nfcbackend.Models;
using nfcbackend.Repositories;
using nfcbackend.Services;
using System.Security.Principal;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace nfcbackend.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        public IAccountService AccountService { get; set; }

        public AccountController(IAccountService accountService)
        {
            AccountService = accountService;
        }


        // GET: api/<AccountController>
        [HttpGet]
        public async Task<IList<AccountDTO>> Get()
        {
            IList<AccountDTO> accounts = new List<AccountDTO>();
            accounts = AccountService.GetIncludes(a => a.Profiles);
            return await Task.FromResult(accounts);
        }

        // GET api/<AccountController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(Guid id)
        {
            try
            {
                AccountDTO accountDTO = await AccountService.GetById(id);
                return Ok(accountDTO);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }

        // POST api/<AccountController>
        [HttpPost]
        public IActionResult Post([FromBody] PostAccountDTO accountDTO)
        {
            try
            {
                if (accountDTO == null)
                {
                    return BadRequest("Empty data.");
                }
                AccountService.Add(accountDTO);
                return Ok();
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }

        }

        //POST api/<AccountController>/login
        [HttpPost("login")]
        public IActionResult Login(Logins logins)
        {
            try
            {
                AccountDTO accountDTO = AccountService.Login(logins.mail, logins.password).Result;
                return Ok(accountDTO);
            }
            catch (Exception e)
            {

                //return BadRequest(e.Message);
                return StatusCode(StatusCodes.Status403Forbidden, e.Message);
            }
        }


        // PUT api/<AccountController>/5
        [HttpPut("{id}")]
        public IActionResult Put(Guid id, [FromBody] AccountDTO accountDTO)
        {
            try
            {
                if (accountDTO == null)
                {
                    return BadRequest("Empty data.");
                }
                AccountService.Update(accountDTO, id);
                return Ok("Account updated successfully");
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        // DELETE api/<AccountController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            try
            {
                AccountService.Delete(id);
                return Ok("Account deleted successfully");
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }
    }
}
