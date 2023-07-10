using System.Linq.Expressions;

namespace nfcbackend.Repositories
{
    public interface IRepository<T>
    {
        Task Add(T obj);

        Task<T> GetById(Guid id);

        Task<IList<T>> GetAll();

        Task Delete(Guid id);

        Task Update(T obj, Guid id);

        IList<T> GetIncludes(params Expression<Func<T, object>>[] includes);

        Task<bool> Contains(Guid id);
    }
}
