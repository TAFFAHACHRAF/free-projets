using AutoMapper;
using nfcbackend.DTO;
using nfcbackend.Models;
using nfcbackend.Repositories;

namespace nfcbackend.Services
{
    public class CompanyServiceImpl : ICompanyService
    {
        public IMapper _mapper { get; set; }

        public ICompanyRepository CompanyRepository { get; set; }

        public IAccountRepository AccountRepository { get; set; }

        public CompanyServiceImpl(IMapper mapper, ICompanyRepository companyRepository, IAccountRepository accountRepository)
        {
            _mapper = mapper;
            CompanyRepository = companyRepository;
            AccountRepository = accountRepository;
        }

        public Task Add(CompanyDTO obj)
        {
            Company company = _mapper.Map<Company>(obj);
            Account account = _mapper.Map<Account>(obj.account);
            account.SuscriberId = obj.Id;
            company.account = account;
            company.account.accountType = Helpers.AccountType.Company;
            company.account.password = BCrypt.Net.BCrypt.HashPassword(company.account.password);
            return CompanyRepository.Add(company);
        }

        public Task Add(PostCompanyDTO obj)
        {
            Company company = _mapper.Map<Company>(obj);
            Account account = _mapper.Map<Account>(obj.account);
            account.SuscriberId = obj.Id;
            company.account = account;
            company.account.accountType = Helpers.AccountType.Company;
            company.account.password = BCrypt.Net.BCrypt.HashPassword(company.account.password);
            try
            {
                bool isMailAlreadyUsed = AccountRepository.IsMailAlreadyUsed(account).Result;
                if (!isMailAlreadyUsed)
                {
                    return CompanyRepository.Add(company);
                }
                throw new Exception("Mail already used.");

            }
            catch (Exception e)
            {

                throw new Exception(e.Message);
            }
        }

        public async Task<CompanyDTO> GetById(Guid id)
        {
            Company c = await CompanyRepository.GetById(id);
            CompanyDTO companyDTO = _mapper.Map<CompanyDTO>(c);
            companyDTO.account = GetCompanyAccountDTO(id);
            return companyDTO;
        }

        ///<summary>Get the company's account and returns its DTO form</summary>
        private AccountDTO GetCompanyAccountDTO(Guid id)
        {
            Account a = AccountRepository.GetBySuscriberId(id).Result;
            AccountDTO accountDTO = _mapper.Map<AccountDTO>(a);
            return accountDTO;
        }

        public Task<IList<CompanyDTO>> GetAll()
        {
            IList<Company> companies = CompanyRepository.GetAll().Result;
            IList<CompanyDTO> companyDTOs = new List<CompanyDTO>();
            foreach (var u in companies)
            {
                CompanyDTO companyDTO = _mapper.Map<CompanyDTO>(u);
                companyDTO.account = GetCompanyAccountDTO(u.Id);
                companyDTOs.Add(companyDTO);
            }

            return Task.FromResult(companyDTOs);
        }

        public Task Delete(Guid id)
        {
            return Task.FromResult(CompanyRepository.Delete(id));
        }

        public async Task Update(CompanyDTO obj, Guid id)
        {
            if (Contains(id).Result && id == obj.Id)
            {
                Company c = _mapper.Map<Company>(obj);
                c.account = AccountRepository.GetBySuscriberId(id).Result;
                await CompanyRepository.Update(c, id);

            }
        }

        public Task<bool> Contains(Guid id)
        {
            return CompanyRepository.Contains(id);
        }
    }
}
