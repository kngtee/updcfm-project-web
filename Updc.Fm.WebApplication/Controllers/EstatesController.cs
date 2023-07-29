using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Text.Json;
using Updc.Fm.WebApplication.Domian;

namespace Updc.Fm.WebApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EstatesController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public EstatesController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllEstates()
        {
            var client = _httpClientFactory.CreateClient("api");
            var response = await client.GetAsync("/api/estates");
            if (response.IsSuccessStatusCode)
            {
                var res = await response.Content.ReadAsStringAsync();
                return StatusCode(200, res);
            }

            return StatusCode(400, await response.Content.ReadAsStringAsync());
        }

        [HttpPost]
        public async Task<IActionResult> CreateEstate(CreateEstate estate)
        {
            var client = _httpClientFactory.CreateClient("api");
            var content = JsonSerializer.Serialize(estate);
            var body = new StringContent(content, Encoding.UTF8, "application/json");
            var response = await client.PostAsync("/api/estates/create", body);

            if (response.IsSuccessStatusCode)
            {
                var res = await response.Content.ReadAsStringAsync();
                return StatusCode(201, res);
            }

            return StatusCode(400, await response.Content.ReadAsStringAsync());
        }
        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetEstateById(string id)
        {
            var client = _httpClientFactory.CreateClient("api");
            var response = await client.GetAsync($"/api/estates/{id}");

            if (response.IsSuccessStatusCode)
            {
                var res = await response.Content.ReadAsStringAsync();
                return StatusCode(200, res);
            }

            return StatusCode(400, response.Content.ReadAsStringAsync());
        }

        [HttpGet]
        [Route("{id}/units")]
        public async Task<IActionResult> GetUnitsByEstateId(string id)
        {
            var client = _httpClientFactory.CreateClient("api");
            var response = await client.GetAsync($"/api/estates/{id}/units");

            if (response.IsSuccessStatusCode)
            {
                var res = await response.Content.ReadAsStringAsync();
                return StatusCode(200, res);
            }

            return StatusCode(400, response.Content.ReadAsStringAsync());
        }

        [HttpPost]
        [Route("{id}/units")]
        public async Task<IActionResult> CreateAUnitInEstate(CreateUnitDto unit)
        {
            var client = _httpClientFactory.CreateClient("api");
            var content = JsonSerializer.Serialize(unit);
            var body = new StringContent(content, Encoding.UTF8, "application/json");

            var response = await client.PostAsync("/api/units/create", body);

            if (response.IsSuccessStatusCode)
            {
                var res = await response.Content.ReadAsStringAsync();
                return StatusCode(201, res);
            }

            return StatusCode(400, await response.Content.ReadAsStringAsync());

        }
    }
}
