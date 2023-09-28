namespace FSDRailway.Models
{
    public class Train
    {
        public Guid Id { get; set; }
        public string Name { get; set; }

        // Navigation Properties

        public Timings Timings { get; set; }
        public Price Prices { get; set; }
    }
}
