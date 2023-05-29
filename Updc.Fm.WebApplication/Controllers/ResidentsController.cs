using Microsoft.AspNetCore.Mvc;

namespace Updc.Fm.WebApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ResidentsController : Controller
    {
        
        private readonly IHttpClientFactory _httpClientFactory;

        public ResidentsController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllResidents()
        {
            var client = _httpClientFactory.CreateClient("api");
            var response = await client.GetAsync("/api/admins/residents");
            if (response.IsSuccessStatusCode)
            {
                var res = await response.Content.ReadAsStringAsync();

                return StatusCode(200, res);
            }

            return StatusCode(400, "Something went wrong");
        }
    }
}
