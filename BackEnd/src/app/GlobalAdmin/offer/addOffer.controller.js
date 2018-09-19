(function () {
    'use strict';

    angular
        .module('home')
        .controller('addOfferController', ['$rootScope', '$scope', '$filter', 'currencyPrepService','callBackFunction', 'selectedLanguage', '$translate', '$uibModal','$uibModalInstance', '$state', '$localStorage', 'authorizationService', 'templatePrepService', 'TemplatePagingResource', 'appCONSTANTS', 'ToastService', 'AddOfferResource', addOfferController]);


    function addOfferController($rootScope, $scope, $filter, currencyPrepService,callBackFunction, selectedLanguage, $translate, $uibModal, $uibModalInstance, $state, $localStorage, authorizationService, templatePrepService, TemplatePagingResource,appCONSTANTS, ToastService, AddOfferResource) {
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

        $scope.AddNewOffer = function () {
            var newOffer = new AddOfferResource();

            newOffer.Rate =  $scope.Rate;
            if($scope.Currency == undefined){
                newOffer.CurrencyTypeId = null;
            }
            else{
                newOffer.CurrencyTypeId = $scope.Currency.currencyId;
            }
            
            newOffer.TemplateId = $scope.templateId;
            newOffer.Price = $scope.Price;
            newOffer.IsMain = $scope.IsMain;
            newOffer.TitleDictionary = vm.TitleDictionary;
            newOffer.DescriptionDictionary = vm.DescriptionDictionary;
      
            newOffer.$addOffer().then(
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