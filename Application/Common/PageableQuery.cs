namespace Application.Common
{
    public abstract class PageableQuery
    {
        public PageableQuery()
        {
            PageNumber = 1;
            ItemsOnPage = 10;
        }

        public int PageNumber { get; set; }
        public int ItemsOnPage { get; set; }
    }
}
