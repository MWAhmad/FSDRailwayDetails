using Microsoft.EntityFrameworkCore;

namespace FSDRailway.Data
{
    public class FSDRailwayDbContext : DbContext
    {
        public FSDRailwayDbContext(DbContextOptions<FSDRailwayDbContext> options) : base (options)
        {
        }
    }
}
