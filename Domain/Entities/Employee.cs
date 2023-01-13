using System;
using System.Collections.Generic;

namespace Domain.Entities
{
    public class Employee
    {
		public Employee()
        {
			Employees = new List<Employee>();
			Orders = new List<Order>();
			EmployeeTerritories = new List<EmployeeTerritory>();
		}

		public int EmployeeID { get; set; }			//[int] IDENTITY(1,1) NOT NULL, [PRIMARY]
		public string LastName { get; set; }		//[nvarchar] (20) NOT NULL,
		public string FirstName { get; set; }		//[nvarchar] (10) NOT NULL,
		public string Title { get; set; }			//[nvarchar] (30) NULL,
		public string TitleOfCourtesy { get; set; } //[nvarchar] (25) NULL,
		public DateTime? BirthDate { get; set; }    //[datetime] NULL,
		public DateTime? HireDate { get; set; }		//[datetime] NULL,
		public string Address { get; set; }			//[nvarchar] (60) NULL,
		public string City { get; set; }			//[nvarchar] (15) NULL,
		public string Region { get; set; }			//[nvarchar] (15) NULL,
		public string PostalCode { get; set; }		//[nvarchar] (10) NULL,
		public string Country { get; set; }			//[nvarchar] (15) NULL,
		public string HomePhone { get; set; }		//[nvarchar] (24) NULL,
		public string Extension { get; set; }       //[nvarchar] (4) NULL,

		// TODO: Photo field
		//[Photo] [image] NULL,
		
		public string Notes { get; set; }           //[ntext] NULL,
		public string PhotoPath { get; set; }       //[nvarchar] (255) NULL,

		public ICollection<Order> Orders { get; set; }
		public ICollection<EmployeeTerritory> EmployeeTerritories { get; set; }

		// self reference
		public int? ReportsTo { get; set; }         //[int] NULL,
		public Employee Manager { get; set; }
		public ICollection<Employee> Employees { get; set; }
	}
}
