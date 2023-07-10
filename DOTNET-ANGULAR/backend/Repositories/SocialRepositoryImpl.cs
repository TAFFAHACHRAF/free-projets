using nfcbackend.Data;
using nfcbackend.Models;

namespace nfcbackend.Repositories
{
    public class SocialRepositoryImpl : RepositoryImpl<Social>, ISocialRepository
    {
        public SocialRepositoryImpl(AppDbContext appDbContext) : base(appDbContext)
        {
        }
    }
}
