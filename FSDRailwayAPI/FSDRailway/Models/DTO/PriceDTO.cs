namespace FSDRailway.Models.DTO
{
    public class PriceDTO
    {
        public Guid Id { get; set; }
        public int EconomyClass { get; set; }
        public int AC { get; set; }
        public int Business { get; set; }
        public int Berth { get; set; }

    }
}
