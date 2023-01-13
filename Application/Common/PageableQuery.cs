namespace Application.Common
{
    public abstract class PageableQuery
    {
        public int PageNumber { get; set; }
        public int ItemsOnPage { get; set; }
    }
}
