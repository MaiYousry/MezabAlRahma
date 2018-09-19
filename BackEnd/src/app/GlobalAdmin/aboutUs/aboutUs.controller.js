(function () {
    'use strict';

    angular
        .module('home')
        .controller('aboutUsController', ['$rootScope', '$http', '$scope', '$filter', 'templatePrepService', 'CurrencyResource','AboutUsPagingResource', 'TemplatePagingResource', 'aboutUsPagingPrepService', 'DeleteAboutUsResource', '$translate', '$uibModal', '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', aboutUsController]);


    function aboutUsController($rootScope, $http, $scope, $filter, templatePrepService, CurrencyResource, AboutUsPagingResource, TemplatePagingResource, aboutUsPagingPrepService, DeleteAboutUsResource, $translate, $uibModal, $state, $localStorage, authorizationService, appCONSTANTS, ToastService) {
        var vm = this;

        $scope.flag = 0;
        $scope.flag = aboutUsPagingPrepService.results.length;
        $scope.Rate=0;
    
         $scope.aboutUsList = aboutUsPagingPrepService;
         $scope.templateList = templatePrepService;
         $scope.language = appCONSTANTS.supportedLanguage;
         
        function refreshAboutUses(){
			var k = AboutUsPagingResource.getAllPagingAboutUses({page:vm.currentPage}).$promise.then(function(results) {
				//vm.Now = $scope.getCurrentTime();	
				$scope.aboutUsList = results;
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
            });
        }

        vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshAboutUses();
		}
        
        function confirmationDelete(aboutUsId){
			DeleteAboutUsResource.deleteAboutUs({aboutUsId:aboutUsId}).$promise.then(function(results) {
                ToastService.show("right","bottom","fadeInUp",$translate.instant('DeleteSuccess'),"success");
                vm.currentPage = 1;
				refreshAboutUses();
            },
            
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

        vm.UpdateAboutUs = function (aboutUs) {
            TemplatePagingResource.getAllPagingTemplates().$promise.then(function(results) {
                CurrencyResource.getAllCurrencies().$promise.then(function(resultsCurrencies) {
                    $uibModal.open({
                        templateUrl: './app/GlobalAdmin/aboutUs/templates/editAboutUs.html',
                        controller: 'updateAboutUsController',
                        controllerAs: 'updateAboutUsCtrl',
                        resolve:{
                            templatePrepService: function(){return results;},
                            currencyPrepService: function(){return resultsCurrencies;},
                            callBackFunction: function(){return refreshAboutUses;},
                            selectedLanguage: function(){return $scope.selectedLanguage},
                            AboutUs: function(){return aboutUs}
                        }
        
                    });
                },
                function(data, status) {
                    ToastService.show("right","bottom","fadeInUp",data.message,"error");
                });
            },
            function(data, status) {
                ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }
        
        vm.AddAboutUs = function () {
            TemplatePagingResource.getAllPagingTemplates().$promise.then(function(results) {
                CurrencyResource.getAllCurrencies().$promise.then(function(resultsCurrencies) {
                    $uibModal.open({
                        templateUrl: './app/GlobalAdmin/aboutUs/templates/addAboutUs.html',
                        controller: 'addAboutUsController',
                        controllerAs: 'addAboutUsCtrl',
                        resolve:{
                            templatePrepService: function(){return results;},
                            currencyPrepService: function(){return resultsCurrencies;},
                            callBackFunction: function(){return refreshAboutUses;},
                            selectedLanguage: function(){return $scope.selectedLanguage}
                        }
        
                    });
                },
                function(data, status) {
                    ToastService.show("right","bottom","fadeInUp",data.message,"error");
                });
            },
            function(data, status) {
                ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
          
        }

        vm.DeleteTemplate = function(aboutUsId){			
			var modalContent = $uibModal.open({
				templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
				controller: 'confirmDeleteDialogController',
				controllerAs: 'deleteDlCtrl',
				resolve: {
                    itemId: function() { return aboutUsId },
                    itemName: function() { return null },
                    message: function() { return null },
					callBackFunction:function() { return confirmationDelete; }
				}
				
			});
		}
    }
    

}());