using Microsoft.EntityFrameworkCore;

namespace BLS_Refresher.Models
{
    public class BLSContext : DbContext
    {
        public BLSContext(DbContextOptions<BLSContext> options)
            : base(options)
        {
            
        }

        public DbSet<BLSItem> BLSItems { get; set; }
        public DbSet<AppUsers> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder){
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<AppUsers>(entity =>{
                entity.HasKey(e=>e.CustomerID);
            });
        }
    }
}
