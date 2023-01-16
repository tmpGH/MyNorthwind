using Domain.Common;
using System.Collections.Generic;

namespace Domain.Entities
{
    public class CustomerDemographic : AuditableEntity
    {
        public CustomerDemographic()
        {
            CustomerCustomerDemos = new List<CustomerCustomerDemo>();
        }

        public string CustomerTypeID { get; set; }  //[nchar] (10) NOT NULL, [PRIMARY]
        public string CustomerDesc { get; set; }    //[ntext] NULL,
        public ICollection<CustomerCustomerDemo> CustomerCustomerDemos { get; private set; }
    }
}
