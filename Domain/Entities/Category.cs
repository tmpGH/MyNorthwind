using System.Collections.Generic;

namespace Domain.Entities
{
    public class Category
    {
		public Category()
		{
			Products = new List<Product>();
        }

		public int CategoryID { get; set; }				//IDENTITY(1,1) NOT NULL, [PRIMARY]
		public string CategoryName { get; set; }		//[nvarchar] (15) NOT NULL,
		public string Description { get; set; }			//[ntext] NULL,

		// TODO: Picture field
		//[Picture] [image] NULL,

		public IList<Product> Products { get; set; }
	}
}
