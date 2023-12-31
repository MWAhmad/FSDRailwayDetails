﻿using AutoMapper;
using FSDRailway.Models;
using FSDRailway.Models.DTO;

namespace FSDRailway.Mappings
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Train, TrainDTO>().ReverseMap();
            CreateMap<Timings, TimingsDTO>().ReverseMap();
            CreateMap<Price, PriceDTO>().ReverseMap();
        }
    }
}
