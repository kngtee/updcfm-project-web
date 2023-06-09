﻿using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Text.Json;
using Updc.Fm.WebApplication.Domian;

namespace Updc.Fm.WebApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthsController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public AuthsController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginDto login)
        {
            var header = Request.Headers["x-access-pwd"].ToString();
            string[] authHeader = header.Split(' ');
            var password = authHeader[1];

            var client = _httpClientFactory.CreateClient("api");
            client.DefaultRequestHeaders.Add("x-access-pwd", "Bearer " + password);

            var body = JsonSerializer.Serialize(login);

            var requestBody = new StringContent(body, Encoding.UTF8, "application/json");

            var response = await client.PostAsync("/api/admins/auth/login", requestBody);

            if (response.IsSuccessStatusCode)
            {
                var res = await response.Content.ReadAsStringAsync();

                return StatusCode(200, res);
            }

            return StatusCode(400, response);
        }
    }
}
