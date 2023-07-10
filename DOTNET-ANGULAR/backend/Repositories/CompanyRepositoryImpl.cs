using nfcbackend.Data;
using nfcbackend.Models;

namespace nfcbackend.Repositories
{
    public class CompanyRepositoryImpl : RepositoryImpl<Company>, ICompanyRepository
    {
        public CompanyRepositoryImpl(AppDbContext appDbContext) : base(appDbContext)
        {
        }
    }
}
