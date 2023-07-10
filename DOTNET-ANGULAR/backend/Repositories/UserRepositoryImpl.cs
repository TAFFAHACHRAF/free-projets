using nfcbackend.Data;
using nfcbackend.Models;

namespace nfcbackend.Repositories
{
    public class UserRepositoryImpl : RepositoryImpl<User>, IUserRepository
    {
        public UserRepositoryImpl(AppDbContext appDbContext) : base(appDbContext)
        {
        }
    }
}
