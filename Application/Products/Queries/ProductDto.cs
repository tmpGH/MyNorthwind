using System;

namespace Application.Products.Queries
{
    public class ProductDto
    {
		public int ProductID { get; set; }
		public string ProductName { get; set; }
		public string QuantityPerUnit { get; set; }
		public decimal? UnitPrice { get; set; }
		public Int16? UnitsInStock { get; set; }
	}
}
