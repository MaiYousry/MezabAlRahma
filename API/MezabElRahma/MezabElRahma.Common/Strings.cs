using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MezabElRahma.Common
{
    public class Strings
    {
        public const string JWT = "JWT";
        public const string userId = "UserId";
        public const string userName = "Email"; // Email
        public const string name = "nameOfUser";
        public const string userRole = "Role";
        //public const string APIURL = "http://invitationsbackend.azurewebsites.net/TemplatesImages";
        //public const string APIURL = "http://localhost:33343/TemplatesImages";


        public static readonly List<string> SupportedLanguages = new List<string> { "ar-eg",  "en-US" };
        public const string DefaultLanguage = "en-US";
    }
}
