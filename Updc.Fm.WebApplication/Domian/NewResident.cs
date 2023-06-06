using Updc.Fm.Domain.Dto;

namespace Updc.Fm.WebApplication.Domian
{
    public class NewResident
    {
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string unitId { get; set; } = string.Empty;
        public ContactDto Contact { get; set; }
    }
}
