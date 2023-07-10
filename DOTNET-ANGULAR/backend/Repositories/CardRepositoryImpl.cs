using nfcbackend.Data;
using nfcbackend.Models;

namespace nfcbackend.Repositories
{
    public class CardRepositoryImpl : RepositoryImpl<Card>, ICardRepository
    {
        public CardRepositoryImpl(AppDbContext appDbContext) : base(appDbContext)
        {
        }
    }
}
