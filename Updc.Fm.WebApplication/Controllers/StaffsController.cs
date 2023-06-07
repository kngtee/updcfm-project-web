using Microsoft.AspNetCore.Mvc;

namespace Updc.Fm.WebApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StaffsController : Controller
    {
        public readonly IHttpClientFactory _httpClientFactory;

        public StaffsController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllStaff()
        {
            var client = _httpClientFactory.CreateClient("api");
            var response = await client.GetAsync("/api/admins/staffs");
            if (response.IsSuccessStatusCode)
            {
                var res = await response.Content.ReadAsStringAsync();
                return StatusCode(200, res);
            }

            return StatusCode(400, await response.Content.ReadAsStringAsync());
        }

        
    }
}
