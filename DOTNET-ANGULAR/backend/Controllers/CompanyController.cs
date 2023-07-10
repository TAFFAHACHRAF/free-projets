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
    public class CompanyController : ControllerBase
    {


        public ICompanyService CompanyService { get; set; }
        private IMapper _mapper;

        public CompanyController(ICompanyService companyService, IMapper mapper)
        {
            CompanyService = companyService;
            _mapper = mapper;
        }





        // GET: api/<CompanyController>
        [HttpGet]
        public async Task<IList<CompanyDTO>> Get()
        {
            IList<CompanyDTO> companies = new List<CompanyDTO>();
            companies = await CompanyService.GetAll();
            return await Task.FromResult(companies);
        }

        // GET api/<CompanyController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(Guid id)
        {
            try
            {
                CompanyDTO companyDTO = await CompanyService.GetById(id);
                return Ok(companyDTO);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
            
        }

        // POST api/<CompanyController>
        [HttpPost]
        public IActionResult Post([FromBody] PostCompanyDTO companyDTO)
        {
            try
            {
                if (companyDTO == null)
                {
                    return BadRequest("Empty data.");
                }
                CompanyService.Add(companyDTO);
                return Ok("Company and Account added successfully.");
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        // PUT api/<CompanyController>/5
        [HttpPut("{id}")]
        public IActionResult Put(Guid id, [FromBody] CompanyDTO companyDTO)
        {
            try
            {
                if(companyDTO == null)
                {
                    return BadRequest("Empty data.");
                }
                CompanyService.Update(companyDTO, id);
                return Ok();
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
            
        }

        // DELETE api/<CompanyController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            try
            {
                CompanyService.Delete(id);
                return Ok();
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
            
        }
    }
}
