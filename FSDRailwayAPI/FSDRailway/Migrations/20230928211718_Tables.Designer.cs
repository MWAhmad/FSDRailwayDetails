﻿// <auto-generated />
using System;
using FSDRailway.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace FSDRailway.Migrations
{
    [DbContext(typeof(FSDRailwayDbContext))]
    [Migration("20230928211718_Tables")]
    partial class Tables
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.11")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("FSDRailway.Models.Price", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("AC")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Berth")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Business")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EconomyClass")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Prices");
                });

            modelBuilder.Entity("FSDRailway.Models.Timings", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("ArrivalTime")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DepartureTime")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Timings");
                });

            modelBuilder.Entity("FSDRailway.Models.Train", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("PricesId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("TimingsId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("PricesId");

                    b.HasIndex("TimingsId");

                    b.ToTable("Trains");
                });

            modelBuilder.Entity("FSDRailway.Models.Train", b =>
                {
                    b.HasOne("FSDRailway.Models.Price", "Prices")
                        .WithMany()
                        .HasForeignKey("PricesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("FSDRailway.Models.Timings", "Timings")
                        .WithMany()
                        .HasForeignKey("TimingsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Prices");

                    b.Navigation("Timings");
                });
#pragma warning restore 612, 618
        }
    }
}
