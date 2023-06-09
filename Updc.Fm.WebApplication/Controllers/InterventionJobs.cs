using Microsoft.AspNetCore.Mvc;

namespace Updc.Fm.WebApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InterventionJobs : Controller
    {
        public readonly IHttpClientFactory _httpClientFactory;

        public InterventionJobs(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllInterventionJobs()
        {
            var client = _httpClientFactory.CreateClient("api");
            var response = await client.GetAsync("/api/admins/intervention-jobs");
            if (response.IsSuccessStatusCode)
            {
                var res = await response.Content.ReadAsStringAsync();
                return StatusCode(200, res);
            }
            return StatusCode(400, await response.Content.ReadAsStringAsync());
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetSingleInterventionJob(string id)
        {
            var client = _httpClientFactory.CreateClient("api");
            var response = await client.GetAsync("/api/admins/intervention-jobs/" + id);
            if (response.IsSuccessStatusCode)
            {
                var res = await response.Content.ReadAsStringAsync();
                return StatusCode(200, res);
            }

            return StatusCode(400, await response.Content.ReadAsStringAsync());
        }
    }
}
