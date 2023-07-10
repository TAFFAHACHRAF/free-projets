using nfcbackend.Models;
using System.Linq.Expressions;

namespace nfcbackend.Repositories
{
    public interface IAccountRepository : IRepository<Account>
    {
        Task<Account> GetBySuscriberId(Guid SuscriberId);

        public Task<bool> IsMailAlreadyUsed(Account account);

        Task<Account> Login(string mail, string password);
    }
}
