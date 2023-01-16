using Domain.Common;
using System.Collections.Generic;

namespace Domain.Entities
{
    public class Territory : AuditableEntity
    {
        public Territory()
        {
            EmployeeTerritories = new List<EmployeeTerritory>();
        }

        public string TerritoryID { get; set; }             //[nvarchar] (20) NOT NULL, [PRIMARY]
        public string TerritoryDescription { get; set; }    //[nchar] (50) NOT NULL,
        
        public int RegionID { get; set; }                   //[int] NOT NULL,
        public Region Region { get; set; }

        public ICollection<EmployeeTerritory> EmployeeTerritories { get; private set; }
    }
}
