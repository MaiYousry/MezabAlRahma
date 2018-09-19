(function () {
    'use strict';

    angular
        .module('home')
        .controller('contactUsController', ['$rootScope', '$http', '$scope', '$filter', 'ContactUsResource', 'contactUsPrepService', '$translate', '$uibModal', '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', contactUsController]);


    function contactUsController($rootScope, $http, $scope, $filter, ContactUsResource, contactUsPrepService, $translate, $uibModal, $state, $localStorage, authorizationService, appCONSTANTS, ToastService) {
        var vm = this;
       // debugger;
     
        $scope.contactUsObj = contactUsPrepService;

        $scope.flag = 0;
        $scope.flag = $scope.contactUsObj.contactUsId;
         
        function refreshContactUs(){
			var k = ContactUsResource.getContactUs().$promise.then(function(results) {
				$scope.contactUsObj = results;
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

        vm.UpdateContactUs = function (contactUs) {
            $uibModal.open({
                templateUrl: './app/GlobalAdmin/contactUs/templates/editContactUs.html',
                controller: 'editContactUsController',
                controllerAs: 'editContactUsCtrl',
                resolve:{
                    ContactUs: function(){return contactUs}
                }
            });
        }
        
        vm.AddContactUs = function () {
            $uibModal.open({
                templateUrl: './app/GlobalAdmin/contactUs/templates/addContactUs.html',
                controller: 'addContactUsController',
                controllerAs: 'addContactUsCtrl'

            });
          
        }
    }
    

}());