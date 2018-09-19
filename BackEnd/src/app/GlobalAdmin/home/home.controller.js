(function () {
    'use strict';

    angular
        .module('home')
        .controller('homeController', ['$rootScope', '$http', '$scope', '$filter', 'currencyPrepService', 'templatePrepService', 'CurrencyResource','HomePagingResource', 'TemplatePagingResource', 'homePagingPrepService', 'DeleteHomeResource', '$translate', '$uibModal', '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', homeController]);


    function homeController($rootScope, $http, $scope, $filter, currencyPrepService, templatePrepService, CurrencyResource, HomePagingResource, TemplatePagingResource, homePagingPrepService, DeleteHomeResource, $translate, $uibModal, $state, $localStorage, authorizationService, appCONSTANTS, ToastService) {
        var vm = this;
     
        $scope.flag = 0;
        $scope.flag = homePagingPrepService.results.length;

        $scope.Rate=0;
    
         $scope.homeList = homePagingPrepService;
         $scope.templateList = templatePrepService;
         $scope.currencyList = currencyPrepService;
         $scope.language = appCONSTANTS.supportedLanguage;
         
        function refreshHomes(){
			var k = HomePagingResource.getAllPagingHomes({page:vm.currentPage}).$promise.then(function(results) {
				//vm.Now = $scope.getCurrentTime();	
				$scope.homeList = results;
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

        vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshHomes();
		}
        
        function confirmationDelete(homeId){
			DeleteHomeResource.deleteHome({homeId:homeId}).$promise.then(function(results) {
                ToastService.show("right","bottom","fadeInUp",$translate.instant('DeleteSuccess'),"success");
                vm.currentPage = 1;
				refreshHomes();
            },
            
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

        vm.UpdateHome = function (home) {
            TemplatePagingResource.getAllPagingTemplates().$promise.then(function(results) {
                CurrencyResource.getAllCurrencies().$promise.then(function(resultsCurrencies) {
                    $uibModal.open({
                        templateUrl: './app/GlobalAdmin/home/templates/editHome.html',
                        controller: 'updateHomeController',
                        controllerAs: 'updateHomeCtrl',
                        resolve:{
                            templatePrepService: function(){return results;},
                            currencyPrepService: function(){return resultsCurrencies;},
                            callBackFunction: function(){return refreshHomes;},
                            selectedLanguage: function(){return $scope.selectedLanguage},
                            Home: function(){return home}
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
        
        vm.AddHome = function () {
            TemplatePagingResource.getAllPagingTemplates().$promise.then(function(results) {
                CurrencyResource.getAllCurrencies().$promise.then(function(resultsCurrencies) {
                    $uibModal.open({
                        templateUrl: './app/GlobalAdmin/home/templates/addHome.html',
                        controller: 'addHomeController',
                        controllerAs: 'addHomeCtrl',
                        resolve:{
                            templatePrepService: function(){return results;},
                            currencyPrepService: function(){return resultsCurrencies;},
                            callBackFunction: function(){return refreshHomes;},
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

        vm.DeleteTemplate = function(homeId){			
			var modalContent = $uibModal.open({
				templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
				controller: 'confirmDeleteDialogController',
				controllerAs: 'deleteDlCtrl',
				resolve: {
                    itemId: function() { return homeId },
                    itemName: function() { return null },
                    message: function() { return null },
					callBackFunction:function() { return confirmationDelete; }
				}
				
			});
		}
    }
    

}());