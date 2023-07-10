using nfcbackend.Models;
using System.Linq.Expressions;

namespace nfcbackend.Repositories
{
    public interface IProfileRepository : IRepository<Profile>
    {
        Task<IList<Social>> GetAllSocialByProfile(Guid profileId);
        Task<IList<Card>> GetAllCardByProfile(Guid profileId);
        Task<List<Profile>> GetByAccountId(Guid accountId);

    }
}
