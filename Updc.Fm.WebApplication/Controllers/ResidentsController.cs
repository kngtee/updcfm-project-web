using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Text.Json;
using Updc.Fm.Domain.Dto;

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

        [HttpPost]
        public async Task<IActionResult> CreateNewResident(ResidentDto resident)
        {
            var client = _httpClientFactory.CreateClient("api");
            var body = JsonSerializer.Serialize(resident);
            var content = new StringContent(body, Encoding.UTF8, "application/json");
            var response = await client.PostAsync("/api/admins/resident/new", content);

            if (response.IsSuccessStatusCode)
            {
                var res = await response.Content.ReadAsStringAsync();
                return StatusCode(201, res);
            }

            return StatusCode(400, response.Content.ReadAsStringAsync());
        }
    }
}
