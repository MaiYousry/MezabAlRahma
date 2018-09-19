using System;
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
    public class HotelService : Service<Hotel>, IHotelService
    {
        public HotelService(IRepositoryAsync<Hotel> repository) : base(repository)
        {

        }

        public List<Hotel> HotelsPaging(long userId)
        {
            var hotels = _repository.Query(x => x.CreatorUserId == userId).Select().ToList();
            return hotels;
        }
        public PagedResultsDTO GetAllHotelsForCertainUser(long userId, int page, int pageSize)
        {
            PagedResultsDTO results = new PagedResultsDTO();
            results.TotalCount = _repository.Queryable().Count(x => !x.IsDeleted && x.CreatorUserId == userId);
            results.Data = Mapper.Map<List<Hotel>, List<HotelDTO>>(_repository.Query(x => !x.IsDeleted && x.CreatorUserId == userId).Select().OrderBy(x => x.HotelId).Skip((page - 1) * pageSize)
                .Take(pageSize).ToList());
            return results;
        }
    }
}
