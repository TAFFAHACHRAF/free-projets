﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using nfcbackend.Data;

#nullable disable

namespace nfcbackend.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.16")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("nfcbackend.Models.Account", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("char(36)");

                    b.Property<DateTime?>("CreatedAt")
                        .HasColumnType("datetime(6)");

                    b.Property<int?>("CurrentProfileNumber")
                        .HasColumnType("int");

                    b.Property<int?>("MaxProfileNumber")
                        .HasColumnType("int");

                    b.Property<Guid>("SuscriberId")
                        .HasColumnType("char(36)");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("accountType")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<bool>("isActive")
                        .HasColumnType("tinyint(1)");

                    b.Property<string>("mail")
                        .IsRequired()
                        .HasMaxLength(150)
                        .HasColumnType("varchar(150)");

                    b.Property<string>("password")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.HasIndex("SuscriberId")
                        .IsUnique();

                    b.HasIndex("mail")
                        .IsUnique();

                    b.ToTable("Accounts");
                });

            modelBuilder.Entity("nfcbackend.Models.Card", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("char(36)");

                    b.Property<Guid>("ProfileId")
                        .HasColumnType("char(36)");

                    b.Property<bool>("isActive")
                        .HasColumnType("tinyint(1)");

                    b.HasKey("Id");

                    b.HasIndex("ProfileId");

                    b.ToTable("Cards");
                });

            modelBuilder.Entity("nfcbackend.Models.Profile", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("char(36)");

                    b.Property<Guid?>("AccountId")
                        .HasColumnType("char(36)");

                    b.Property<string>("Adress")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("ImagePath")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<bool>("IsActive")
                        .HasColumnType("tinyint(1)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<float>("Lattitude")
                        .HasColumnType("float");

                    b.Property<float>("Longitude")
                        .HasColumnType("float");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<int>("TemplateIndex")
                        .HasColumnType("int");

                    b.Property<DateTime>("UpdateAt")
                        .HasColumnType("datetime(6)");

                    b.HasKey("Id");

                    b.HasIndex("AccountId");

                    b.ToTable("Profiles");
                });

            modelBuilder.Entity("nfcbackend.Models.Social", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("char(36)");

                    b.Property<Guid>("ProfileId")
                        .HasColumnType("char(36)");

                    b.Property<string>("SocialUrl")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("socialPlatform")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.HasIndex("ProfileId");

                    b.ToTable("Socials");
                });

            modelBuilder.Entity("nfcbackend.Models.Suscriber", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("char(36)");

                    b.Property<DateTime?>("CreatedAt")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("Discriminator")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("datetime(6)");

                    b.HasKey("Id");

                    b.ToTable("Suscriber");

                    b.HasDiscriminator<string>("Discriminator").HasValue("Suscriber");
                });

            modelBuilder.Entity("nfcbackend.Models.Company", b =>
                {
                    b.HasBaseType("nfcbackend.Models.Suscriber");

                    b.Property<string>("companyAddress")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("companyName")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("companyPhoneNumber")
                        .HasColumnType("longtext");

                    b.HasDiscriminator().HasValue("Company");
                });

            modelBuilder.Entity("nfcbackend.Models.User", b =>
                {
                    b.HasBaseType("nfcbackend.Models.Suscriber");

                    b.Property<string>("address")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<DateTime>("birth")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("firstName")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("lastName")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("phoneNumber")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasDiscriminator().HasValue("User");
                });

            modelBuilder.Entity("nfcbackend.Models.Account", b =>
                {
                    b.HasOne("nfcbackend.Models.Suscriber", "Suscriber")
                        .WithOne("account")
                        .HasForeignKey("nfcbackend.Models.Account", "SuscriberId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Suscriber");
                });

            modelBuilder.Entity("nfcbackend.Models.Card", b =>
                {
                    b.HasOne("nfcbackend.Models.Profile", "Profile")
                        .WithMany("Cards")
                        .HasForeignKey("ProfileId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Profile");
                });

            modelBuilder.Entity("nfcbackend.Models.Profile", b =>
                {
                    b.HasOne("nfcbackend.Models.Account", "Account")
                        .WithMany("Profiles")
                        .HasForeignKey("AccountId");

                    b.Navigation("Account");
                });

            modelBuilder.Entity("nfcbackend.Models.Social", b =>
                {
                    b.HasOne("nfcbackend.Models.Profile", "Profile")
                        .WithMany("Socials")
                        .HasForeignKey("ProfileId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Profile");
                });

            modelBuilder.Entity("nfcbackend.Models.Account", b =>
                {
                    b.Navigation("Profiles");
                });

            modelBuilder.Entity("nfcbackend.Models.Profile", b =>
                {
                    b.Navigation("Cards");

                    b.Navigation("Socials");
                });

            modelBuilder.Entity("nfcbackend.Models.Suscriber", b =>
                {
                    b.Navigation("account")
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}