using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MezabElRahma.Common.CustomException
{
    public enum ErrorCodes
    {
        UserNotFound,
        HomeNotFound,
        CurrencyNotFound,
        RepeatedGroupName,
        RepeatedContactEmail,
        ContactNotFound,
        EmptyTemplateImage,
        ImageExceedSize,
        InvalidImageType,
        TemplateNotFound,
        InvitationNotFound,
        NoAllowedAccessForInvitation,
        InviteeNotFound,
        UserNotActive,
        RepeatedEmail,
        PackageNotFound,
        OfferNotFound,
        OurTeamNotFound,
        HotelNotFound,
        ContactUsNotFound,
        AboutUsNotFound,
        TemplateHasRelationWithAboutUs,
        TemplateHasRelationWithHome,
        TemplateHasRelationWithOurTeam,
        CannotDeleteLogo
    }
}
