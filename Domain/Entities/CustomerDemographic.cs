namespace Domain.Entities
{
    public class CustomerDemographic
    {
        public string CustomerTypeID { get; set; }  //[nchar] (10) NOT NULL, [PRIMARY]
        public string CustomerDesc { get; set; }    //[ntext] NULL,
    }
}
