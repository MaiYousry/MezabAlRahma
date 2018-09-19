(function () {
    'use strict';

    angular
        .module('home')
        .controller('addCurrencyController', ['$rootScope', '$scope', '$filter', 'AddCurrencyResource','CurrencyPagingResource', 'callBackFunction', '$translate', '$uibModal','$uibModalInstance', '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', addCurrencyController]);


    function addCurrencyController($rootScope, $scope, $filter, AddCurrencyResource, CurrencyPagingResource, callBackFunction, $translate, $uibModal, $uibModalInstance, $state, $localStorage, authorizationService, appCONSTANTS, ToastService) {
        var vm = this;
        $scope.currencyList;
        vm.titleDictionary;
        $scope.getId="0";
        $scope.language = appCONSTANTS.supportedLanguage;
       // console.log(appCONSTANTS.supportedLanguage);
        $scope.changeId=function (val){
            $scope.getId=val;
        }
        
        function refreshCurrencies(){
			var k = CurrencyPagingResource.getAllPagingCurrencies({page:vm.currentPage}).$promise.then(function(results) {
				//vm.Now = $scope.getCurrentTime();	
				$scope.currencyList = results;
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

		vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshCurrencies();
        }

        vm.close = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
		}
    
        $scope.AddNewCurrency = function () {
            var newCurrency = new AddCurrencyResource();
            newCurrency.TitleDictionary = vm.titleDictionary;

            newCurrency.$addCurrency().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddSuccess'), "success");
                    callBackFunction();
                    //close popup after save
                    $uibModalInstance.dismiss('cancel');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

        // $scope.AddNewContactMore = function () {
        //     var newContact = new AddContactResource();

        //     newContact.GroupName =  vm.ContactGroupName;
        //     newContact.ContactName = $scope.ContactName;
        //     newContact.ContactEmail = $scope.ContactEmail;
        //     newContact.ContactMobileNum = $scope.ContactMobileNum;
        //     newContact.ContactGroups =  vm.selectedGroups;
        //     //newContact.GroupName =  $scope.ContactGroupName;
        //     //var k = vm.groupListSelection;
        //     newContact.$create().then(
        //         function (data, status) {
        //             ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddSuccess'), "success");
        //             callBackFunction();
        //             $scope.ContactName="";
        //             $scope.ContactEmail="";
        //             $scope.ContactMobileNum="";
        //             vm.selectedGroups=[];
        //             vm.ContactGroupName="";
        //             refreshGroupsList();
        //             //close popup after save
        //           //  $uibModalInstance.dismiss('cancel');

        //         },
        //         function (data, status) {
        //             ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
        //         }
        //     );
        // }

    }

}());