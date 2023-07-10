using nfcbackend.DTO;

namespace nfcbackend.Services
{
    public interface ICompanyService : IService<CompanyDTO>
    {
        Task Add(PostCompanyDTO obj);
    }
}
