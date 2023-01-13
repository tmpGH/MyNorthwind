namespace Domain.Entities
{
    public class EmployeeTerritory
    {
        public int EmployeeID { get; set; }		    //[int] NOT NULL,
        public Employee Employee { get; set; }

        public string TerritoryID { get; set; }     //[nvarchar] (20) NOT NULL,
        public Territory Territory { get; set; }
    }
}
