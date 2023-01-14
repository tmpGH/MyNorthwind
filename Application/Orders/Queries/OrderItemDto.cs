using System;

namespace Application.Orders.Queries
{
    public class OrderItemDto
    {
		public int OrderID { get; set; }
		public DateTime? OrderDate { get; set; }
		public DateTime? RequiredDate { get; set; }
		public DateTime? ShippedDate { get; set; }
	}
}
