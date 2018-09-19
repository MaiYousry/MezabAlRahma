(function () {
    'use strict';

    angular
        .module('home')
        .controller('addContactUsController', ['$rootScope', '$scope', '$filter', '$window', 'AddContactUsResource','ContactUsResource', '$translate', '$uibModal','$uibModalInstance', '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', addContactUsController]);


    function addContactUsController($rootScope, $scope, $filter, $window, AddContactUsResource, ContactUsResource, $translate, $uibModal, $uibModalInstance, $state, $localStorage, authorizationService, appCONSTANTS, ToastService) {
        var vm = this;
        $scope.contactUsObj;
        
        debugger;
        function refreshContactUs(){
			var k = ContactUsResource.getContactUs().$promise.then(function(results) {
				$scope.contactUsObj = results;
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

        vm.close = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
		}
    
        $scope.AddNewContactUs = function () {
            var newContactUs = new AddContactUsResource();
            newContactUs.Email = $scope.Email;
            newContactUs.CompanyNumber = $scope.MobileNum;
            newContactUs.WhatsAppNumber = $scope.WhatsAppNum;
            newContactUs.Location = $scope.Location;
            newContactUs.ShowEmail = $scope.ShowEmail;
            newContactUs.ShowMobile = $scope.ShowMobile;
            newContactUs.ShowFacebook = $scope.ShowFacebook;
            newContactUs.ShowGmail = $scope.ShowGmail;
            newContactUs.ShowTwitter = $scope.ShowTwitter;
            newContactUs.ShowOwnerEmail = $scope.ShowOwnerEmail;
            newContactUs.ShowWhatsApp = $scope.ShowWhatsApp;
            newContactUs.FacebookLink = $scope.FacebookLink;
            newContactUs.GmailLink = $scope.GmailLink;
            newContactUs.TwitterLink = $scope.TwitterLink;

            newContactUs.$addContactUs().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddSuccess'), "success");
                    //callBackFunction();
                    $window.location.reload();
                    //close popup after save
                    //refreshContactUs();
                    $uibModalInstance.dismiss('cancel');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

    }

}());