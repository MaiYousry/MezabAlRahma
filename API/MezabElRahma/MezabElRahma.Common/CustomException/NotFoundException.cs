using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MezabElRahma.Common.CustomException
{
    public class NotFoundException : ApplicationException
    {
        public NotFoundException(ErrorCodes errorCode) : base(errorCode)
        {
            
        }
    }
}
