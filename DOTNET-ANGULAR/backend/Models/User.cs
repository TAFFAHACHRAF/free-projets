namespace nfcbackend.Models
{
    public class User : Suscriber
    {

        public User()
        {
        }

        public string firstName { get; set; }

        public string lastName { get; set; }

        public string phoneNumber { get; set; }

        public string address { get; set; }

        public DateTime birth { get; set; }




    }
}
