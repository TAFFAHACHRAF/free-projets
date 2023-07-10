using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;
using nfcbackend.Data;
using nfcbackend.Models;
using System.Linq.Expressions;

namespace nfcbackend.Repositories
{
    public class RepositoryImpl<T> : IRepository<T> where T : Base
    {
        public AppDbContext context { get; }
        protected DbSet<T> table = null;

        public RepositoryImpl(AppDbContext appDbContext)
        {
            context = appDbContext;
            table = appDbContext.Set<T>();

        }


        public virtual async Task Add(T obj)
        {
            try
            {
                await table.AddAsync(obj);
                context.SaveChanges();
            }
            catch (Exception e)
            {

                throw new Exception(e.Message);
            }
            
        }

        public async Task Delete(Guid id)
        {
            try
            {
                if (await Contains(id))
                {
                    T obj = GetById(id).Result;
                    table.Remove(obj);
                    await Task.FromResult(context.SaveChanges());
                }
                else
                {
                    await Task.FromException(new Exception("Item not found"));
                }
            }
            catch (Exception e)
            {

                throw new Exception(e.Message);
            }
        }

        public async Task<IList<T>> GetAll()
        {
            try
            {
                return await table.ToListAsync();
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        public async Task<T> GetById(Guid id)
        {
            return await table.SingleOrDefaultAsync(obj => obj.Id == id);
        }

        public IList<T> GetIncludes(params Expression<Func<T, object>>[] includes)
        {

            IQueryable<T> query = table.Include(includes[0]);
            foreach (var include in includes.Skip(1))
            {
                query = query.Include(include);
            }
            return query.ToList();
        }

        public async Task Update(T obj, Guid id)
        {
            try
            {
                if (await Contains(id) && obj.Id == id)
                {
                    table.Update(obj);
                    await Task.FromResult(context.SaveChanges());
                }
                else
                {
                    await Task.FromException(new Exception("Item not found"));
                }
            }
            catch (Exception e)
            {

                throw new Exception(e.Message);
            }
        }

        public Task<bool> Contains(Guid id)
        {
            return Task.FromResult(table.AsNoTracking().SingleOrDefault(obj => obj.Id == id) != null);
            
        }
    }
}
