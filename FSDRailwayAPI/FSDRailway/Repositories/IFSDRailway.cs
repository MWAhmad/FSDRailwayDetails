using FSDRailway.Models;

namespace FSDRailway.Repositories
{
    public interface IFSDRailway
    {
        Task<List<Train>> GetAllAsync();
        Task<Train> GetByIdAsync(Guid id);
    }
}
