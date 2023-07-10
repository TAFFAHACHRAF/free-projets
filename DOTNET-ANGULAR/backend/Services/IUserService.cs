using nfcbackend.DTO;

namespace nfcbackend.Services
{
    public interface IUserService : IService<UserDTO>
    {
        Task Add(PostUserDTO obj);
    }
}
