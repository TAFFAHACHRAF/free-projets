using nfcbackend.DTO;
using nfcbackend.Models;
using System.Linq.Expressions;

namespace nfcbackend.Services
{
    public interface IAccountService : IService<AccountDTO>
    {
        IList<AccountDTO> GetIncludes(params Expression<Func<AccountDTO, object>>[] includes);

        Task Add(PostAccountDTO obj);


        Task<AccountDTO> Login(string mail, string password);
    }
}
