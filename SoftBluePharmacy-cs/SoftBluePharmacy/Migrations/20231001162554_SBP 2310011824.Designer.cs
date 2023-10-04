﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SoftBluePharmacy.Data;

#nullable disable

namespace SoftBluePharmacy.Migrations
{
    [DbContext(typeof(PharmacyContext))]
    [Migration("20231001162554_SBP 2310011824")]
    partial class SBP2310011824
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.11")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("SoftBluePharmacy.Data.Models.MedicineModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Manufacturer")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Otc")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.ToTable("Medicines");
                });

            modelBuilder.Entity("SoftBluePharmacy.Data.Models.UnitMedicineModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("AmountAvailable")
                        .HasColumnType("int");

                    b.Property<int>("MedicineId")
                        .HasColumnType("int");

                    b.Property<int>("UnitId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("MedicineId");

                    b.HasIndex("UnitId");

                    b.ToTable("UnitMedicines");
                });

            modelBuilder.Entity("SoftBluePharmacy.Data.Models.UnitModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Localization")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Units");
                });

            modelBuilder.Entity("SoftBluePharmacy.Data.Models.UnitMedicineModel", b =>
                {
                    b.HasOne("SoftBluePharmacy.Data.Models.MedicineModel", "Medicine")
                        .WithMany("UnitMedicine")
                        .HasForeignKey("MedicineId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("SoftBluePharmacy.Data.Models.UnitModel", "Unit")
                        .WithMany("UnitMedicine")
                        .HasForeignKey("UnitId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Medicine");

                    b.Navigation("Unit");
                });

            modelBuilder.Entity("SoftBluePharmacy.Data.Models.MedicineModel", b =>
                {
                    b.Navigation("UnitMedicine");
                });

            modelBuilder.Entity("SoftBluePharmacy.Data.Models.UnitModel", b =>
                {
                    b.Navigation("UnitMedicine");
                });
#pragma warning restore 612, 618
        }
    }
}