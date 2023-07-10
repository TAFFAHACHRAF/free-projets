using AutoMapper;
using nfcbackend.DTO;
using nfcbackend.Models;
using nfcbackend.Repositories;
using System.Linq.Expressions;

namespace nfcbackend.Services
{
    public class AccountServiceImpl : IAccountService
    {
        public IMapper _mapper { get; set; }

        public IAccountRepository AccountRepository { get; set; }

        public IProfileRepository ProfileRepository { get; set; }

        public AccountServiceImpl(IMapper mapper, IAccountRepository accountRepository, IProfileRepository profileRepository)
        {
            _mapper = mapper;
            AccountRepository = accountRepository;
            ProfileRepository = profileRepository;
        }

        public Task Add(AccountDTO obj)
        {
            Account account = _mapper.Map<Account>(obj);
            return AccountRepository.Add(account);
        }

        public Task Add(PostAccountDTO obj)
        {
            Account account = _mapper.Map<Account>(obj);
            account.SuscriberId = obj.Id;
            account.accountType = Helpers.AccountType.Company;
            account.password = BCrypt.Net.BCrypt.HashPassword(obj.password);
            return AccountRepository.Add(account);
        }



        public Task<AccountDTO> GetById(Guid id)
        {
            Account account = AccountRepository.GetById(id).Result;
            AccountDTO accountDTO = _mapper.Map<AccountDTO>(account);

            accountDTO.Profiles = GetAccountProfileDTO(id);
            return Task.FromResult(accountDTO);
        }

        private List<ProfileDTO> GetAccountProfileDTO(Guid id)
        {
            List<Models.Profile> profiles = ProfileRepository.GetByAccountId(id).Result;
            List<ProfileDTO> profileDTOs = new List<ProfileDTO>();
            foreach (var p in profiles)
            {
                ProfileDTO profileDTO = _mapper.Map<ProfileDTO>(p);
                profileDTOs.Add(profileDTO);
            }
            return profileDTOs;
        }

        public Task<IList<AccountDTO>> GetAll()
        {
            IList<Account> accounts = AccountRepository.GetAll().Result;
            IList<AccountDTO> accountDTOs = new List<AccountDTO>();
            foreach (var a in accounts)
            {
                AccountDTO accountDTO = _mapper.Map<AccountDTO>(a);
                accountDTOs.Add(accountDTO);
            }
            return Task.FromResult(accountDTOs);

        }

        public Task Delete(Guid id)
        {
            return Task.FromResult(AccountRepository.Delete(id));
        }

        public async Task Update(AccountDTO obj, Guid id)
        {
            if (Contains(id).Result && id == obj.Id)
            {
                Account a = _mapper.Map<Account>(obj);
                a.Profiles = ProfileRepository.GetByAccountId(id).Result;
                await AccountRepository.Update(a, id);

            }
        }

        public Task<bool> Contains(Guid id)
        {
            return AccountRepository.Contains(id);
        }

        public IList<AccountDTO> GetIncludes(params Expression<Func<AccountDTO, object>>[] includes)
        {
            IList<Account> accounts = AccountRepository.GetIncludes(p => p.Profiles);
            IList<AccountDTO> accountDTOs = new List<AccountDTO>();
            foreach (var a in accounts)
            {
                AccountDTO accountDTO = _mapper.Map<AccountDTO>(a);
                accountDTOs.Add(accountDTO);
            }
            return accountDTOs;

        }

        public Task<AccountDTO> Login(string mail, string password)
        {
            try
            {
                Account account = AccountRepository.Login(mail, password).Result;
                AccountDTO accountDTO = _mapper.Map<AccountDTO>(account);
                return Task.FromResult(accountDTO);

            }
            catch (Exception e)
            {

                throw new Exception(e.Message);
            }
        }

        
    }
}
