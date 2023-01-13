using System.Collections.Generic;

namespace Domain.Entities
{
    public class Customer
    {
		public Customer()
        {
			Orders = new List<Order>();
			CustomerCustomerDemos = new List<CustomerCustomerDemo>();
		}

		public string CustomerID { get; set; }      //[nchar] (5) NOT NULL, [PRIMARY]
		public string CompanyName { get; set; }		//[nvarchar] (40) NOT NULL,
		public string ContactName { get; set; }		//[nvarchar] (30) NULL,
		public string ContactTitle { get; set; }	//[ContactTitle] [nvarchar] (30) NULL,
		public string Address { get; set; }			//[nvarchar] (60) NULL,
		public string City { get; set; }			//[nvarchar] (15) NULL,
		public string Region { get; set; }			//[nvarchar] (15) NULL,
		public string PostalCode { get; set; }		//[nvarchar] (10) NULL,
		public string Country { get; set; }			//[nvarchar] (15) NULL,
		public string Phone { get; set; }			//[nvarchar] (24) NULL,
		public string Fax { get; set; }             //[nvarchar] (24) NULL,

		public ICollection<CustomerCustomerDemo> CustomerCustomerDemos { get; set; }
		public ICollection<Order> Orders { get; set; }
	}
}
