using Microsoft.EntityFrameworkCore;
using nfcbackend.Helpers;
using nfcbackend.Models;

namespace nfcbackend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {

        }

        public DbSet<Card>? Cards { get; set; }
        public DbSet<User>? Users { get; set; }
        public DbSet<Company>? Companies { get; set; }
        public DbSet<Account>? Accounts { get; set; }
        public DbSet<Profile>? Profiles { get; set; }
        public DbSet<Social>? Socials { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<Account>()
                .Property(a => a.accountType)
                .HasConversion(
                    v => v.ToString(),
                    v => (AccountType)Enum.Parse(typeof(AccountType), v));

            modelBuilder
                .Entity<Account>()
                .HasIndex(a => a.mail)
                .IsUnique();



            modelBuilder
               .Entity<Social>()
               .Property(a => a.socialPlatform)
               .HasConversion(
                   v => v.ToString(),
                   v => (SocialPlatform)Enum.Parse(typeof(SocialPlatform), v));
        }




    }


}
