using Domain.Common;
using System;
using System.Collections.Generic;

namespace Domain.Entities
{
    public class Product : AuditableEntity
	{
		public Product()
		{
			OrderDetails = new List<OrderDetail>();
		}

		public int ProductID { get; set; }			//[int] IDENTITY(1,1) NOT NULL,
		public string ProductName { get; set; }		//[nvarchar] (40) NOT NULL,
		public string QuantityPerUnit { get; set; } //[nvarchar] (20) NULL,
		public decimal? UnitPrice { get; set; }		//[money] NULL,
		public Int16? UnitsInStock { get; set; }     //[smallint] NULL,
		public Int16? UnitsOnOrder { get; set; }     //[smallint] NULL,
		public Int16? ReorderLevel { get; set; }     //[smallint] NULL,
		public bool Discontinued { get; set; }		//[bit] NOT NULL,

		public int? SupplierID { get; set; }         //[int] NULL,
		public Supplier Supplier { get; set; }
		public int? CategoryID { get; set; }         //[int] NULL,
		public Category Category { get; set; }

		public ICollection<OrderDetail> OrderDetails { get; private set; }
	}
}
