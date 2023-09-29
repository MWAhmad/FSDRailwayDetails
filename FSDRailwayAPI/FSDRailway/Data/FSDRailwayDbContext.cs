using FSDRailway.Models;
using Microsoft.EntityFrameworkCore;

namespace FSDRailway.Data
{
    public class FSDRailwayDbContext : DbContext
    {
        public FSDRailwayDbContext(DbContextOptions<FSDRailwayDbContext> options) : base (options)
        {
        }
        public DbSet<Train> Trains { get; set; }
        public DbSet<Price> Prices { get; set; }
        public DbSet<Timings> Timings { get; set; }
    }
}
