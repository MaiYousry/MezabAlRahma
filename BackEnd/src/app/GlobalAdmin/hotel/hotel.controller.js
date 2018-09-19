(function () {
    'use strict';

    angular
        .module('home')
        .controller('hotelController', ['$rootScope', '$http', '$scope', '$filter', 'currencyPrepService', 'templatePrepService', 'CurrencyResource','HotelPagingResource', 'TemplatePagingResource', 'hotelPagingPrepService', 'DeleteHotelResource', '$translate', '$uibModal', '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', hotelController]);


    function hotelController($rootScope, $http, $scope, $filter, currencyPrepService, templatePrepService, CurrencyResource, HotelPagingResource, TemplatePagingResource, hotelPagingPrepService, DeleteHotelResource, $translate, $uibModal, $state, $localStorage, authorizationService, appCONSTANTS, ToastService) {
        var vm = this;
     
        $scope.Rate=0;
    
         $scope.hotelList = hotelPagingPrepService;
         $scope.templateList = templatePrepService;
         $scope.currencyList = currencyPrepService;
         $scope.language = appCONSTANTS.supportedLanguage;
         
        function refreshHotels(){
			var k = HotelPagingResource.getAllPagingHotels({page:vm.currentPage}).$promise.then(function(results) {
				//vm.Now = $scope.getCurrentTime();	
				$scope.hotelList = results;
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

        vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshHotels();
		}
        
        function confirmationDelete(hotelId){
			DeleteHotelResource.deleteHotel({hotelId:hotelId}).$promise.then(function(results) {
                ToastService.show("right","bottom","fadeInUp",$translate.instant('DeleteSuccess'),"success");
                vm.currentPage = 1;
				refreshHotels();
            },
            
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

        vm.UpdateHotel = function (hotel) {
            TemplatePagingResource.getAllPagingTemplates().$promise.then(function(results) {
                CurrencyResource.getAllCurrencies().$promise.then(function(resultsCurrencies) {
                    $uibModal.open({
                        templateUrl: './app/GlobalAdmin/hotel/templates/editHotel.html',
                        controller: 'updateHotelController',
                        controllerAs: 'updateHotelCtrl',
                        resolve:{
                            templatePrepService: function(){return results;},
                            currencyPrepService: function(){return resultsCurrencies;},
                            callBackFunction: function(){return refreshHotels;},
                            selectedLanguage: function(){return $scope.selectedLanguage},
                            Hotel: function(){return hotel}
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
        
        vm.AddHotel = function () {
            TemplatePagingResource.getAllPagingTemplates().$promise.then(function(results) {
                CurrencyResource.getAllCurrencies().$promise.then(function(resultsCurrencies) {
                    $uibModal.open({
                        templateUrl: './app/GlobalAdmin/hotel/templates/addHotel.html',
                        controller: 'addHotelController',
                        controllerAs: 'addHotelCtrl',
                        resolve:{
                            templatePrepService: function(){return results;},
                            currencyPrepService: function(){return resultsCurrencies;},
                            callBackFunction: function(){return refreshHotels;},
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

        vm.DeleteTemplate = function(hotelId){			
			var modalContent = $uibModal.open({
				templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
				controller: 'confirmDeleteDialogController',
				controllerAs: 'deleteDlCtrl',
				resolve: {
                    itemId: function() { return hotelId },
                    itemName: function() { return null },
                    message: function() { return null },
					callBackFunction:function() { return confirmationDelete; }
				}
				
			});
		}
    }
    

}());