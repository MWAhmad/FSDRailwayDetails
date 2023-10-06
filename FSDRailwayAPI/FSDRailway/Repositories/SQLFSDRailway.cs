using AutoMapper;
using FSDRailway.Data;
using FSDRailway.Models;
using Microsoft.EntityFrameworkCore;

namespace FSDRailway.Repositories
{
    public class SQLFSDRailway : IFSDRailway
    {
        private readonly FSDRailwayDbContext dbContext;

        public SQLFSDRailway(FSDRailwayDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<List<Train>> GetAllAsync()
        {
             return await dbContext.Trains.Include("Prices").Include("Timings").ToListAsync();
        }

        public async Task<Train> GetByIdAsync(Guid id)
        {
            var train = await dbContext.Trains.FirstOrDefaultAsync(x => x.Id == id);
            return train;
        }
    }
}
