using Domain.Common;
using System.Collections.Generic;

namespace Domain.Entities
{
    public class Shipper : AuditableEntity
    {
        public Shipper()
        {
            Orders = new List<Order>();
        }

        public int ShipperID { get; set; }      //[int] IDENTITY(1,1) NOT NULL, [PRIMARY]
        public string CompanyName { get; set; } //[nvarchar] (40) NOT NULL,
        public string Phone { get; set; }       //[nvarchar] (24) NULL,

        public ICollection<Order> Orders { get; private set; }
    }
}
