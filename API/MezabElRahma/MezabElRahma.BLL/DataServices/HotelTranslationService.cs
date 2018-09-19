﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using MezabElRahma.BLL.DataServices.Interfaces;
using MezabElRahma.BLL.DTOs;
using MezabElRahma.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;


namespace MezabElRahma.BLL.DataServices
{
    public class HotelTranslationService : Service<HotelTranslation>, IHotelTranslationService
    {
        public HotelTranslationService(IRepositoryAsync<HotelTranslation> repository) : base(repository)
        {

        }
        public List<HotelTranslation> GetTransByHotelId(long hotelId)
        {
            var hotelTrans = _repository.Query().Select().Where(x => x.HotelId == hotelId).ToList();
            return hotelTrans;
        }
    }
}