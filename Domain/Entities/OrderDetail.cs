using Domain.Common;
using System;

namespace Domain.Entities
{
    public class OrderDetail : AuditableEntity
	{
		public decimal UnitPrice { get; set; } //[money] NOT NULL,
		public Int16 Quantity { get; set; }     //[smallint] NOT NULL,
		public double Discount { get; set; }    //[real] NOT NULL,

		public int OrderID { get; set; }        //[int] NOT NULL,
		public Order Order { get; set; }
		public int ProductID { get; set; }      //[int] NOT NULL,
		public Product Product { get; set; }
	}
}
