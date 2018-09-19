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
    public class OfferTranslationService : Service<OfferTranslation>, IOfferTranslationService
    {
        public OfferTranslationService(IRepositoryAsync<OfferTranslation> repository) : base(repository)
        {

        }
        public List<OfferTranslation> GetTransByOfferId(long offerId)
        {
            var offerTrans = _repository.Query().Select().Where(x => x.OfferId == offerId).ToList();
            return offerTrans;
        }
    }
}
