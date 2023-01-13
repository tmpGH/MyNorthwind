namespace Domain.Entities
{
    public class CustomerCustomerDemo
    {
        public string CustomerID { get; set; }      //[nchar] (5) NOT NULL,
        public Customer Customer { get; set; }

        public string CustomerTypeID { get; set; }  //[nchar] (10) NOT NULL,
        public CustomerDemographic CustomerDemographic { get; set; }

        
    }
}
