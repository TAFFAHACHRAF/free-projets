using BCrypt.Net;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using nfcbackend.Data;
using nfcbackend.Models;
using System.Linq.Expressions;
using System.Security.Principal;

namespace nfcbackend.Repositories
{
    public class AccountRepositoryImpl : RepositoryImpl<Account>, IAccountRepository
    {


        public AccountRepositoryImpl(AppDbContext appDbContext) : base(appDbContext)
        {}

        public async Task<Account> GetBySuscriberId(Guid id)
        {
            

            return await table.SingleOrDefaultAsync(obj => obj.SuscriberId == id);
        }

        public override Task Add(Account account)
        {
            try
            {
                if (!IsMailAlreadyUsed(account).Result)
                {
                    account.password = BCrypt.Net.BCrypt.HashPassword(account.password);
                    return base.Add(account);
                }
                else
                {
                    throw new Exception("Email already used");
                }
            }
            catch (Exception e)
            {

                throw new Exception(e.Message);
            }
            
            


        }

        public Task<bool> IsMailAlreadyUsed(Account account)
        {
            bool isEmailAlreadyUsed = table.Any(obj => obj.mail == account.mail);
            if (isEmailAlreadyUsed)
            {
                throw new Exception("Email already used");
            }
            return Task.FromResult(isEmailAlreadyUsed);
        }

        public Task<Account> Login(string mail, string password)
        {
            Account? account = table.SingleOrDefault(obj => obj.mail == mail);
            if ( account == default)
            {
                throw new Exception("No Account found");
            }
            else
            {
                bool verified = BCrypt.Net.BCrypt.Verify(password, account.password);
                if (verified)
                {
                    return Task.FromResult(account);
                }
                throw new Exception("Invalid email or password");
            }
        }





        //public override async Task<IList<Account>> GetIncludes(params Expression<Func<Account, object>>[] includes)
        //{
        //    try
        //    {
        //        return await table.Include(a => a.Suscriber).ToListAsync();
        //    }
        //    catch (Exception e)
        //    {
        //        throw new Exception(e.Message);
        //    }
        //}



    }
}
