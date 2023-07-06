using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Text.Json;
using Updc.Fm.WebApplication.Domian;

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
            var header = Request.Headers["Authorization"].ToString();
            client.DefaultRequestHeaders.Add("Authorization", header);
            var response = await client.GetAsync("/api/admins/staffs");
            if (response.IsSuccessStatusCode)
            {
                var res = await response.Content.ReadAsStringAsync();
                return StatusCode(200, res);
            }

            return StatusCode(400, await response.Content.ReadAsStringAsync());
        }

        [HttpPost]
        public async Task<IActionResult> CreateBackEndStaff(CreateBackEndStaff staff)
        {
            var client = _httpClientFactory.CreateClient("api");
            var header = Request.Headers["x-access-pwd"].ToString();
            client.DefaultRequestHeaders.Add("Authorization", header);
            var content = JsonSerializer.Serialize(staff);
            var body = new StringContent(content, Encoding.UTF8, "application/json");
            var response = await client.PostAsync("/api/admins/profile/create", body);
            if (response.IsSuccessStatusCode)
            {
                var res = await response.Content.ReadAsStringAsync();
                return StatusCode(201, res);
            }
            return StatusCode(400, await response.Content.ReadAsStringAsync());
        }
        
    }
}
