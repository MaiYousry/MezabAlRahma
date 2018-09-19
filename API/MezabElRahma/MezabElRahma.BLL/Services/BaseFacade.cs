﻿using Repository.Pattern.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MezabElRahma.BLL.Services
{
    public class BaseFacade
    {
        protected IUnitOfWorkAsync _unitOfWork;

        public BaseFacade(IUnitOfWorkAsync unitOFWork)
        {
            _unitOfWork = unitOFWork;

        }

        public void SaveChanges()
        {
            if (_unitOfWork != null)
            {
                _unitOfWork.SaveChanges();
            }

        }
        public BaseFacade()
        {

        }
    }
}
