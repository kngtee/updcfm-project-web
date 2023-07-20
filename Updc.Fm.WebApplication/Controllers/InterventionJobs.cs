using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.Text;
using Updc.Fm.Domain.Entities;
using Updc.Fm.WebApplication.Domian;

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

        [HttpPost]
        [Route("{id}/inspection")]
        public async Task<IActionResult> CreateInspection(string id, CreateInspection inspection)
        {
            var client = _httpClientFactory.CreateClient("api");
            var body = JsonSerializer.Serialize(inspection);
            var content = new StringContent(body, Encoding.UTF8, "application/json");
            var response = await client.PostAsync($"/api/admins/intervention-jobs/{id}/inspection", content);

            if (response.IsSuccessStatusCode)
            {
                var res = await response.Content.ReadAsStringAsync();
                return StatusCode(200, res);
            }

            return StatusCode(400, await response.Content.ReadAsStringAsync());
        }

        [HttpPost]
        [Route("{id}/inspection/{inspectionId}")]
        public async Task<IActionResult> UpdatedInspectionNote(string id, UpdateInspectionNote note, string inspectionId)
        {
            var client = _httpClientFactory.CreateClient("api");
            var body = JsonSerializer.Serialize(note);
            var content = new StringContent(body, Encoding.UTF8, "application/json");
            var response = await client.PostAsync($"/api/admins/intervention-jobs/{id}/inspection/{inspectionId}", content);

            if (response.IsSuccessStatusCode)
            {
                var res = await response.Content.ReadAsStringAsync();
                return StatusCode(200, res);
            }

            return StatusCode(400, await response.Content.ReadAsStringAsync());
        }
    }
}
