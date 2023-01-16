using Domain.Common;
using System.Collections.Generic;

namespace Domain.Entities
{
    public class Region : AuditableEntity
    {
        public Region()
        {
            Territories = new List<Territory>();
        }

        public int RegionID { get; set; }               //[int] NOT NULL, [PRIMARY]
        public string RegionDescription { get; set; }   //[nchar] (50) NOT NULL,

        public ICollection<Territory> Territories { get; private set; }
    }
}
