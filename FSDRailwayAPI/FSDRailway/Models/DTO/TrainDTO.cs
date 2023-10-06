namespace FSDRailway.Models.DTO
{
    public class TrainDTO
    {
        public Guid Id { get; set; }
        public string Name { get; set; }

        public TimingsDTO Timings { get; set; }
        public PriceDTO Prices { get; set; }
    }
}
