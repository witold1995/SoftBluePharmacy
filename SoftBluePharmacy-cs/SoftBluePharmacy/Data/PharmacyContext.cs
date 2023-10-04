using Microsoft.EntityFrameworkCore;
using SoftBluePharmacy.Data.Models;

namespace SoftBluePharmacy.Data
{
    public class PharmacyContext : DbContext
    {
        public DbSet<MedicineModel> Medicines { get; set; }
        public DbSet<UnitModel> Units { get; set; }
        public DbSet<UnitMedicineModel> UnitMedicines { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server = localhost\\SQLEXPRESS; Database = SoftBluePharmacy; TrustServerCertificate = True; Trusted_Connection = True");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<MedicineModel>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Name).IsRequired();
                entity.Property(e => e.Manufacturer).IsRequired();
                entity.Property(e => e.OTC).IsRequired();
            });

            modelBuilder.Entity<UnitModel>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Name).IsRequired();
                entity.Property(e => e.Localization).IsRequired();
            });

            modelBuilder.Entity<UnitMedicineModel>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.MedicineId).IsRequired();
                entity.Property(e => e.UnitId).IsRequired();
                entity.Property(e => e.AmountAvailable).IsRequired();
                entity.HasOne(e => e.Medicine)
                    .WithMany()
                    .HasForeignKey(e => e.MedicineId).IsRequired();
                entity.HasOne(e => e.Unit)
                    .WithMany()
                    .HasForeignKey(e => e.UnitId).IsRequired();
            });
        }
    }
}
