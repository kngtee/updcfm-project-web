using Microsoft.AspNetCore.Mvc;

namespace Updc.Fm.WebApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UnitsController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public UnitsController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUnits()
        {
            throw new NotImplementedException();
        }

    }
}
