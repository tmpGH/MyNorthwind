using Application.Regions.Queries;

namespace Application.Territories.Queries
{
    public class TerritoryDto
	{
        public string TerritoryID { get; set; }
        public string TerritoryDescription { get; set; }
        public RegionDto Region { get; set; }
    }
}
