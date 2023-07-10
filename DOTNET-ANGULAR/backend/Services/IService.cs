namespace nfcbackend.Services
{
    public interface IService<T>
    {
        Task Add(T obj);

        Task<T> GetById(Guid id);

        Task<IList<T>> GetAll();

        Task Delete(Guid id);

        Task Update(T obj, Guid id);

        Task<bool> Contains(Guid id);
    }
}
