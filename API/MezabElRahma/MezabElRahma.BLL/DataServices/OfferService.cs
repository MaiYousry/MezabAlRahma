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
    public class OfferService : Service<Offer>, IOfferService
    {
        public OfferService(IRepositoryAsync<Offer> repository) : base(repository)
        {

        }

        public List<Offer> OffersPaging(long userId)
        {
            var offers = _repository.Query(x => x.CreatorUserId == userId).Select().ToList();
            return offers;
        }
        public PagedResultsDTO GetAllOffersForCertainUser(long userId, int page, int pageSize)
        {
            PagedResultsDTO results = new PagedResultsDTO();
            results.TotalCount = _repository.Queryable().Count(x => !x.IsDeleted && x.CreatorUserId == userId);
            results.Data = Mapper.Map<List<Offer>, List<OfferDTO>>(_repository.Query(x => !x.IsDeleted && x.CreatorUserId == userId).Select().OrderBy(x => x.OfferId).Skip((page - 1) * pageSize)
                .Take(pageSize).ToList());
            return results;
        }
    }
}
