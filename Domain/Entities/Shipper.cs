namespace Domain.Entities
{
    public class Shipper
    {
        public int ShipperID { get; set; }      //[int] IDENTITY(1,1) NOT NULL, [PRIMARY]
        public string CompanyName { get; set; } //[nvarchar] (40) NOT NULL,
        public string Phone { get; set; }       //[nvarchar] (24) NULL,
    }
}
