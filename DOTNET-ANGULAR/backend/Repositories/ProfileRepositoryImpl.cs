using Microsoft.EntityFrameworkCore;
using nfcbackend.Data;
using nfcbackend.Models;
using System.Linq.Expressions;

namespace nfcbackend.Repositories
{
    public class ProfileRepositoryImpl : RepositoryImpl<Profile>, IProfileRepository
    {
        private readonly AppDbContext _context;
        public ProfileRepositoryImpl(AppDbContext appDbContext) : base(appDbContext)
        {
            _context = appDbContext;
        }

        public async Task<IList<Card>> GetAllCardByProfile(Guid profileId)
        {
            return await _context.Cards
                .Where(card => card.ProfileId == profileId)
                .ToListAsync();
        }

        public async Task<IList<Social>> GetAllSocialByProfile(Guid profileId)
        {
           

            return await _context.Socials
                .Where(social => social.ProfileId == profileId)
                .ToListAsync();
        }

        public Task<List<Profile>> GetByAccountId(Guid accountId)
        {
            try
            {
                return Task.FromResult(table.Where(p => p.AccountId == accountId).Include(p => p.Socials).Include(p => p.Cards).ToList());
            }
            catch (Exception e)
            {

                throw new Exception(e.Message);
            }

        }
    }
}