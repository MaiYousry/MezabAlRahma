(function () {
    'use strict';

    angular
        .module('home')
        .controller('offerController', ['$rootScope', '$http', '$scope', '$filter', 'currencyPrepService', 'templatePrepService', 'CurrencyResource','OfferPagingResource', 'TemplatePagingResource', 'offerPagingPrepService', 'DeleteOfferResource', '$translate', '$uibModal', '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', offerController]);


    function offerController($rootScope, $http, $scope, $filter, currencyPrepService, templatePrepService, CurrencyResource, OfferPagingResource, TemplatePagingResource, offerPagingPrepService, DeleteOfferResource, $translate, $uibModal, $state, $localStorage, authorizationService, appCONSTANTS, ToastService) {
        var vm = this;
     
        $scope.Rate=0;
    
         $scope.offerList = offerPagingPrepService;
         $scope.templateList = templatePrepService;
         $scope.currencyList = currencyPrepService;
         $scope.language = appCONSTANTS.supportedLanguage;
         
        function refreshOffers(){
			var k = OfferPagingResource.getAllPagingOffers({page:vm.currentPage}).$promise.then(function(results) {
				//vm.Now = $scope.getCurrentTime();	
				$scope.offerList = results;
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

        vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshOffers();
		}
        
        function confirmationDelete(offerId){
			DeleteOfferResource.deleteOffer({offerId:offerId}).$promise.then(function(results) {
                ToastService.show("right","bottom","fadeInUp",$translate.instant('DeleteSuccess'),"success");
                vm.currentPage = 1;
				refreshOffers();
            },
            
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

        vm.UpdateOffer = function (offer) {
            TemplatePagingResource.getAllPagingTemplates().$promise.then(function(results) {
                CurrencyResource.getAllCurrencies().$promise.then(function(resultsCurrencies) {
                    $uibModal.open({
                        templateUrl: './app/GlobalAdmin/offer/templates/editOffer.html',
                        controller: 'updateOfferController',
                        controllerAs: 'updateOfferCtrl',
                        resolve:{
                            templatePrepService: function(){return results;},
                            currencyPrepService: function(){return resultsCurrencies;},
                            callBackFunction: function(){return refreshOffers;},
                            selectedLanguage: function(){return $scope.selectedLanguage},
                            Offer: function(){return offer}
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
        
        vm.AddOffer = function () {
            TemplatePagingResource.getAllPagingTemplates().$promise.then(function(results) {
                CurrencyResource.getAllCurrencies().$promise.then(function(resultsCurrencies) {
                    $uibModal.open({
                        templateUrl: './app/GlobalAdmin/offer/templates/addOffer.html',
                        controller: 'addOfferController',
                        controllerAs: 'addOfferCtrl',
                        resolve:{
                            templatePrepService: function(){return results;},
                            currencyPrepService: function(){return resultsCurrencies;},
                            callBackFunction: function(){return refreshOffers;},
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

        vm.DeleteTemplate = function(offerId){			
			var modalContent = $uibModal.open({
				templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
				controller: 'confirmDeleteDialogController',
				controllerAs: 'deleteDlCtrl',
				resolve: {
                    itemId: function() { return offerId },
                    itemName: function() { return null },
                    message: function() { return null },
					callBackFunction:function() { return confirmationDelete; }
				}
				
			});
		}
    }
    

}());