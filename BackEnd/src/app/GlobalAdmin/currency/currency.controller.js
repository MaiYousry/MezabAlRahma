(function () {
    'use strict';

    angular
        .module('home')
        .controller('currencyController', ['$rootScope', '$http', '$scope', '$filter', 'CurrencyPagingResource', 'DeleteCurrencyResource', 'currencyPagingPrepService', '$translate', '$uibModal', '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', currencyController]);


    function currencyController($rootScope, $http, $scope, $filter, CurrencyPagingResource, DeleteCurrencyResource, currencyPagingPrepService, $translate, $uibModal, $state, $localStorage, authorizationService, appCONSTANTS, ToastService) {
        var vm = this;
     
        $scope.currencyList = currencyPagingPrepService;
         
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
        
        function confirmationDelete(currencyId){
			DeleteCurrencyResource.deleteCurrency({currencyId:currencyId}).$promise.then(function(results) {
                ToastService.show("right","bottom","fadeInUp",$translate.instant('DeleteSuccess'),"success");
                vm.currentPage = 1;
				refreshCurrencies();
            },
            
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

        vm.UpdateCurrency = function (currency) {
            // var currencyId = currency.currencyId;
            $uibModal.open({
                templateUrl: './app/GlobalAdmin/currency/templates/editCurrency.html',
                controller: 'editCurrencyController',
                controllerAs: 'editCurrencyCtrl',
                resolve:{
                    Currency: function(){return currency},
                    callBackFunction:function(){return refreshCurrencies;}
                }
            });
        }
        
        vm.AddCurrency = function () {
            $uibModal.open({
                templateUrl: './app/GlobalAdmin/currency/templates/addCurrency.html',
                controller: 'addCurrencyController',
                controllerAs: 'addCurrencyCtrl',
                resolve:{
                    callBackFunction: function(){return refreshCurrencies;}
                }

            });
          
        }

        vm.DeleteCurrency = function(currencyId){			
			var modalContent = $uibModal.open({
				templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
				controller: 'confirmDeleteDialogController',
				controllerAs: 'deleteDlCtrl',
				resolve: {
                    itemId: function() { return currencyId },
                    itemName: function() { return null },
                    message: function() { return null }, 
					callBackFunction:function() { return confirmationDelete; }
				}
				
			});
        }
    }
    

}());