using System;
using System.Collections.Generic;

namespace Domain.Entities
{
    public class Order
    {
		public Order()
		{
			OrderDetails = new List<OrderDetail>();
		}

		public int OrderID { get; set; }            //[int] IDENTITY(1,1) NOT NULL, [PRIMARY]
		public DateTime? OrderDate { get; set; }    //[datetime] NULL,
		public DateTime? RequiredDate { get; set; } //[datetime] NULL,
		public DateTime? ShippedDate { get; set; }  //[datetime] NULL,
		public decimal? Freight { get; set; }		//[money] NULL,
		public string ShipName { get; set; }		//[nvarchar] (40) NULL,
		public string ShipAddress { get; set; }     //[nvarchar] (60) NULL,
		public string ShipCity { get; set; }        //[nvarchar] (15) NULL,
		public string ShipRegion { get; set; }      //[nvarchar] (15) NULL,
		public string ShipPostalCode { get; set; }  //[nvarchar] (10) NULL,
		public string ShipCountry { get; set; }     //[nvarchar] (15) NULL,

		public string CustomerID { get; set; }      //[nchar] (5) NOT NULL,
		public Customer Customer { get; set; }
		public int? EmployeeID { get; set; }        //[int] NULL,
		public Employee Employee { get; set; }
		public int? ShipVia { get; set; }           //[int] NULL,
		public Shipper Shipper { get; set; }

		public ICollection<OrderDetail> OrderDetails { get; private set; }
	}
}
