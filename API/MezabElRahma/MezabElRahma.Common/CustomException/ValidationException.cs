﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MezabElRahma.Common.CustomException
{
   public class ValidationException : ApplicationException
    {

        public ValidationException(ErrorCodes errorCode) : base(errorCode)
        {
        }
    }
}