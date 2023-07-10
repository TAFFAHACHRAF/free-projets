using AutoMapper;
using nfcbackend.DTO;
using nfcbackend.Models;
using nfcbackend.Repositories;

namespace nfcbackend.Services
{
    public class UserServiceImpl : IUserService
    {
        public IMapper _mapper { get; set; }

        public IUserRepository UserRepository { get; set; }

        public IAccountRepository AccountRepository { get; set; }

        public UserServiceImpl(IMapper mapper, IUserRepository userRepository, IAccountRepository accountRepository)
        {
            _mapper = mapper;
            UserRepository = userRepository;
            AccountRepository = accountRepository;
        }

        public Task Add(UserDTO obj)
        {
            User user = _mapper.Map<User>(obj);
            Account account = _mapper.Map<Account>(obj.account);
            account.SuscriberId = obj.Id;
            user.account = account;
            user.account.accountType = Helpers.AccountType.SoloUser;
            user.account.password = BCrypt.Net.BCrypt.HashPassword(user.account.password);
            
            return UserRepository.Add(user);
        }

        public Task Add(PostUserDTO obj)
        {
            User user = _mapper.Map<User>(obj);
            Account account = _mapper.Map<Account>(obj.account);
            account.SuscriberId = obj.Id;
            user.account = account;
            user.account.accountType = Helpers.AccountType.SoloUser;
            user.account.password = BCrypt.Net.BCrypt.HashPassword(user.account.password);
            try
            {
                bool isMailAlreadyUsed = AccountRepository.IsMailAlreadyUsed(account).Result;
                if (!isMailAlreadyUsed)
                {
                    return UserRepository.Add(user);
                }
                throw new Exception("Mail already used.");
                
            }
            catch (Exception e)
            {

                throw new Exception(e.Message);
            }
            
        }

        public async Task<UserDTO> GetById(Guid id)
        {
            User u = await UserRepository.GetById(id);
            UserDTO userDTO = _mapper.Map<UserDTO>(u);
            userDTO.account = GetUserAccountDTO(id);
            return userDTO;
        }

        ///<summary>Get the user's account and returns its DTO form</summary>
        private AccountDTO GetUserAccountDTO(Guid id)
        {
            Account a = AccountRepository.GetBySuscriberId(id).Result;
            AccountDTO accountDTO = _mapper.Map<AccountDTO>(a);
            return accountDTO;
        }

        public Task<IList<UserDTO>> GetAll()
        {
            IList<User> users = UserRepository.GetAll().Result;
            IList<UserDTO> userDTOs = new List<UserDTO>();
            foreach (var u in users)
            {
                UserDTO userDTO = _mapper.Map<UserDTO>(u);
                userDTO.account = GetUserAccountDTO(u.Id);
                userDTOs.Add(userDTO);
            }

            return Task.FromResult(userDTOs);

        }

        public Task Delete(Guid id)
        {
            try
            {
                return Task.FromResult(UserRepository.Delete(id));
            }
            catch (Exception e)
            {

                throw new Exception(e.Message);
            }
            
        }

        public async Task Update(UserDTO obj, Guid id)
        {
            try
            {
                if (Contains(id).Result && id == obj.Id)
                {
                    User u = _mapper.Map<User>(obj);
                    u.account = AccountRepository.GetBySuscriberId(id).Result;
                    await UserRepository.Update(u, id);

                }
            }
            catch (Exception e)
            {

                throw new Exception(e.Message);
            }
            
            
        }

        public Task<bool> Contains(Guid id)
        {
            return UserRepository.Contains(id);
        }

        
    }
}
