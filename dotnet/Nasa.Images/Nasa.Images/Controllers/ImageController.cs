﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Nasa.Images.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace Nasa.Images.Controllers
{
  [ApiController]
  [Route("api/nasaimages")]
  public class ImageController : BaseApiController
  {

    private readonly ILogger<ImageController> _logger;
    private readonly ApiKeys _apiKeys;

    public ImageController(IOptions<ApiKeys> apiKeys, ILogger<ImageController> logger) : base(logger)
    {
      _apiKeys = apiKeys.Value;
      _logger = logger;
    }


    [HttpGet]
    public async Task<ActionResult<ItemsResponse<List<ImageModel>>>> Get()
    {
      Console.WriteLine(_apiKeys);
      ActionResult result = null;
      
      try
      {
        HttpClient client = new HttpClient();
        HttpResponseMessage httpResponse = await client.GetAsync("https://api.nasa.gov/planetary/apod?api_key=" + _apiKeys.Nasa + "&count=10");
        httpResponse.EnsureSuccessStatusCode();
        string clientResponse = await httpResponse.Content.ReadAsStringAsync();

      
        List<ImageModel> images = Newtonsoft.Json.JsonConvert.DeserializeObject<List<ImageModel>>(clientResponse);
        if(images != null)
        {
          ItemsResponse<ImageModel> response = new ItemsResponse<ImageModel>();
          response.Items = images;
          result = Ok200(response);
        }
      }
      catch (Exception ex)
      {
        Logger.LogError(ex.ToString());
        result = StatusCode(500, new ErrorResponse(ex.Message.ToString()));
      }

      return result;
    }

  }
}
