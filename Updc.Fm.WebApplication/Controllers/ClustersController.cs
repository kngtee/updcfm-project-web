using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Text.Json;
using Updc.Fm.WebApplication.Domian;

namespace Updc.Fm.WebApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClustersController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public ClustersController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        [HttpPost]
        public async Task<IActionResult> CreateCluster(CreateCluster cluster)
        {
            var client = _httpClientFactory.CreateClient("api");
            var content = JsonSerializer.Serialize(cluster);
            var body = new StringContent(content, Encoding.UTF8, "application/json");
            var response = await client.PostAsync("/api/clusters/create", body);

            if (response.IsSuccessStatusCode)
            {
                var res = await response.Content.ReadAsStringAsync();
                return StatusCode(201, res);
            }

            return StatusCode(400, await response.Content.ReadAsStringAsync());
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCluster()
        {
            var client = _httpClientFactory.CreateClient("api");
            var response = await client.GetAsync("/api/clusters");

            if (response.IsSuccessStatusCode)
            {
                var res = await response.Content.ReadAsStringAsync();
                return StatusCode(200, res);
            }

            return StatusCode(400, response.Content.ReadAsStringAsync());
        }
    }
}
