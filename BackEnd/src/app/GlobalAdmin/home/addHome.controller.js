(function () {
    'use strict';

    angular
        .module('home')
        .controller('addHomeController', ['$rootScope', '$scope', '$filter', 'currencyPrepService','callBackFunction', 'selectedLanguage', '$translate', '$uibModal','$uibModalInstance', '$state', '$localStorage', 'authorizationService', 'templatePrepService', 'TemplatePagingResource', 'appCONSTANTS', 'ToastService', 'AddHomeResource', addHomeController]);


    function addHomeController($rootScope, $scope, $filter, currencyPrepService,callBackFunction, selectedLanguage, $translate, $uibModal, $uibModalInstance, $state, $localStorage, authorizationService, templatePrepService, TemplatePagingResource,appCONSTANTS, ToastService, AddHomeResource) {
        var vm = this;
        $scope.templateList = templatePrepService;
        $scope.currencyList = currencyPrepService;
        $scope.templateId="0";
        // $scope.currencyId = 0;
        $scope.Rate = 0;
        $scope.CurrencyTypeId = 0;
        $scope.template;
        $scope.Price;
        $scope.IsMain = false;
        vm.TitleDictionary;
        vm.DescriptionDictionary;
        vm.SubTitleDictionary;
        vm.ColoredTitleDictionary;
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

        $scope.AddNewHome = function () {
            var newHome = new AddHomeResource();

            newHome.Rate =  $scope.Rate;
            // if($scope.Currency == undefined){
            //     newHome.CurrencyTypeId = null;
            // }
            // else{
            //     newHome.CurrencyTypeId = $scope.Currency.currencyId;
            // }
            
            newHome.TemplateId = $scope.templateId;
            newHome.Price = $scope.Price;
            newHome.IsMain = $scope.IsMain;
            newHome.TitleDictionary = vm.TitleDictionary;
            newHome.DescriptionDictionary = vm.DescriptionDictionary;
            newHome.SubTitleDictionary = vm.SubTitleDictionary;
            newHome.ColoredTitleDictionary = vm.ColoredTitleDictionary;
      
            newHome.$addHome().then(
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