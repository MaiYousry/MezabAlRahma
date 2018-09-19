(function () {
    'use strict';

    angular
        .module('home')
        .controller('editContactUsController', ['$rootScope', '$scope', '$window','$uibModalInstance', '$filter', '$translate', '$uibModal', '$state', 'UpdateContactUsResource', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService','ContactUs', editContactUsController]);


    function editContactUsController($rootScope, $scope, $window, $uibModalInstance, $filter, $translate, $uibModal, $state, UpdateContactUsResource, $localStorage, authorizationService, appCONSTANTS,ToastService, ContactUs) {
        var vm = this;

        vm.contactUsObj = ContactUs;
        $scope.LocationDetails = "To get the location url.<br/> 1st: Go to google map.<br/> 2nd: set your target location.<br/> 3rd: click share.<br/> 4th: click (Embed a map) tab.<br/> 5th: Copy the source url (src) and add here."

        vm.close = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
        }

        vm.backdrop = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
        }
        
        $scope.UpdateContactUs = function () {
            var newContactUs = new UpdateContactUsResource();
            
            newContactUs.ContactUsId = vm.contactUsObj.contactUsId;           
            newContactUs.Email = vm.contactUsObj.email;           
            newContactUs.OwnerEmail = vm.contactUsObj.ownerEmail;           
            newContactUs.CompanyNumber = vm.contactUsObj.companyNumber;           
            newContactUs.WhatsAppNumber = vm.contactUsObj.whatsAppNumber;           
            newContactUs.Location = vm.contactUsObj.location;     
            newContactUs.ShowEmail = vm.contactUsObj.showEmail;
            newContactUs.ShowMobile = vm.contactUsObj.showMobile;
            newContactUs.ShowFacebook = vm.contactUsObj.showFacebook;
            newContactUs.ShowGmail = vm.contactUsObj.showGmail;
            newContactUs.ShowTwitter = vm.contactUsObj.showTwitter;
            newContactUs.ShowOwnerEmail = vm.contactUsObj.showOwnerEmail;
            newContactUs.ShowWhatsApp = vm.contactUsObj.showWhatsApp;
            newContactUs.FacebookLink = vm.contactUsObj.facebookLink;
            newContactUs.GmailLink = vm.contactUsObj.gmailLink;
            newContactUs.TwitterLink = vm.contactUsObj.twitterLink;      
           
            newContactUs.$updateContactUs().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('EditSuccess'), "success");
                    $uibModalInstance.dismiss('cancel');
                    $window.location.reload();
                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
 
    }

})();


