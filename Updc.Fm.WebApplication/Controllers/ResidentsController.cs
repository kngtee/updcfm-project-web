using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Text.Json;
using Updc.Fm.Domain.Dto;
using Updc.Fm.WebApplication.Domian;

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
        public async Task<IActionResult> CreateNewResident(NewResident resident)
        {
            var header = Request.Headers["Authorization"].ToString();
            var client = _httpClientFactory.CreateClient("api");
            client.DefaultRequestHeaders.Add("Authorization", header);
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





        [HttpGet]
        [Route("clusters")]
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

        [HttpGet]
        [Route("clusters/{id}/estates")]
        public async Task<IActionResult> GetEstateByClusterId(string id)
        {
            var client = _httpClientFactory.CreateClient("api");
            var response = await client.GetAsync("/api/clusters/" + id + "/estates");

            if(response.IsSuccessStatusCode)
            {
                var res = await response.Content.ReadAsStringAsync();
                return StatusCode(200, res);
            }

            return StatusCode(400, response.Content.ReadAsStringAsync());
        }

        [HttpGet]
        [Route("estates/{id}/units")]
        public async Task<IActionResult> GetUnitByEstateId(string id)
        {
            var client = _httpClientFactory.CreateClient("api");
            var response = await client.GetAsync("/api/estates/" + id + "/units");

            if (response.IsSuccessStatusCode)
            {
                var res = await response.Content.ReadAsStringAsync();
                return StatusCode(200, res);
            }

            return StatusCode(400, response.Content.ReadAsStringAsync());
        }
    }
}
