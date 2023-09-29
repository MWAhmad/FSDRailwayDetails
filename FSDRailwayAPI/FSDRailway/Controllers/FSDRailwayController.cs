using AutoMapper;
using FSDRailway.Models.DTO;
using FSDRailway.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FSDRailway.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FSDRailwayController : ControllerBase
    {
        private readonly IFSDRailway railwayReporsitory;
        private readonly IMapper mapper;

        public FSDRailwayController(IFSDRailway railwayReporsitory, IMapper mapper)
        {
            this.railwayReporsitory = railwayReporsitory;
            this.mapper = mapper;
        }
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var trainDomain = await railwayReporsitory.GetAllAsync();
            return Ok(mapper.Map<List<TrainDTO>>(trainDomain));
        }
        [HttpGet]
        [Route("{id:guid}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var trainDomain = railwayReporsitory.GetByIdAsync(id);
            if (trainDomain == null)
            {
                return NotFound();
            }
            return Ok(mapper.Map<TrainDTO>(trainDomain));
        }
    }
}
