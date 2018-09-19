(function () {
    'use strict';

    angular
        .module('home')
        .controller('addHotelController', ['$rootScope', '$scope', '$filter', 'currencyPrepService','callBackFunction', 'selectedLanguage', '$translate', '$uibModal','$uibModalInstance', '$state', '$localStorage', 'authorizationService', 'templatePrepService', 'TemplatePagingResource', 'appCONSTANTS', 'ToastService', 'AddHotelResource', addHotelController]);


    function addHotelController($rootScope, $scope, $filter, currencyPrepService,callBackFunction, selectedLanguage, $translate, $uibModal, $uibModalInstance, $state, $localStorage, authorizationService, templatePrepService, TemplatePagingResource,appCONSTANTS, ToastService, AddHotelResource) {
        var vm = this;
        $scope.templateList = templatePrepService;
        $scope.currencyList = currencyPrepService;
        $scope.templateId="0";
        //$scope.currencyId = 0;
        $scope.Rate = 0;
        $scope.CurrencyTypeId = 0;
        $scope.template;
        $scope.Price;
        $scope.IsMain = false;
        vm.TitleDictionary;
        vm.DescriptionDictionary;
        $scope.language = appCONSTANTS.supportedLanguage;
        $scope.selectedLanguage = selectedLanguage;
        
        // console.log(appCONSTANTS.supportedLanguage);
        $scope.changeId=function (val){
            $scope.templateId=val;
        }
        
        function refreshTemplates(){
			var k = TemplatePagingResource.getAllPagingTemplates({page:vm.currentPage}).$promise.then(function(results) {
				$scope.templateList = results
				//console.log(vm.Templates);
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

		vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshTemplates();
        }

        vm.close = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
		}

        $scope.AddNewHotel = function () {
            var newHotel = new AddHotelResource();

            newHotel.Rate =  $scope.Rate;
            if($scope.Currency == undefined){
                newHotel.CurrencyTypeId = null;
            }
            else{
                newHotel.CurrencyTypeId = $scope.Currency.currencyId;
            }
            
            newHotel.TemplateId = $scope.templateId;
            newHotel.Price = $scope.Price;
            newHotel.IsMain = $scope.IsMain;
            newHotel.TitleDictionary = vm.TitleDictionary;
            newHotel.DescriptionDictionary = vm.DescriptionDictionary;
      
            newHotel.$addHotel().then(
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

    }

}());