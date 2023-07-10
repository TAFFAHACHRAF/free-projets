using nfcbackend.Models;

namespace nfcbackend.DTO
{
    public class CardDTO : Base
    {
        public bool IsActive { get; set; }
        public Guid ProfileId { get; set; }
       
    }
}
