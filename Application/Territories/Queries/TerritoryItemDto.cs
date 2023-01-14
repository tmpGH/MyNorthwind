using Application.Regions.Queries;

namespace Application.Territories.Queries
{
	public class TerritoryItemDto
	{
        public string TerritoryID { get; set; }
        public string TerritoryDescription { get; set; }
        public RegionItemDto Region { get; set; }
    }
}
