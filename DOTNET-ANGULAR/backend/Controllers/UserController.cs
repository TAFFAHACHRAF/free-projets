using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using nfcbackend.DTO;
using nfcbackend.Models;
using nfcbackend.Repositories;
using nfcbackend.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860




namespace nfcbackend.Controllers
{


    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public IUserService UserService { get; set; }



        public UserController(IUserService userService)
        {
            UserService = userService;
        }



        // GET: api/<UserController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            IList<UserDTO> users = new List<UserDTO>();
            users = await UserService.GetAll();
            return Ok(users);
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            try
            {
                UserDTO userDTO = await UserService.GetById(id);
                return Ok(userDTO);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
            
            

        }

        // POST api/<UserController>
        [HttpPost]
        public IActionResult Post([FromBody] PostUserDTO userDTO)
        {
            
            try
            {
                if (userDTO == null)
                {
                    return BadRequest("Empty data.");
                }
                UserService.Add(userDTO);
                return Ok("User and Account added successfully.");
            }
            catch (Exception e)
            {

                return BadRequest(e.Message) ;
            }
            
            
        }



        // PUT api/<UserController>/
        [HttpPut("{id}")]
        public IActionResult Put(Guid id, [FromBody] UserDTO userDTO)
        {
            try
            {
                if (userDTO == null)
                {
                    return BadRequest("Empty data.");
                }
                UserService.Update(userDTO, id);
                return Ok();
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
            
        }

        // DELETE api/<UserController>/
        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            try
            {
                UserService.Delete(id);
                return Ok();
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
            
        }

    }
    }
