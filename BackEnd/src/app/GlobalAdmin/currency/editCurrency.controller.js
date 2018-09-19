(function () {
    'use strict';

    angular
        .module('home')
        .controller('editCurrencyController', ['$rootScope', '$scope','$uibModalInstance','callBackFunction', '$filter', '$translate', '$uibModal', '$state', 'UpdateCurrencyResource', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService','Currency', editCurrencyController]);


    function editCurrencyController($rootScope, $scope, $uibModalInstance,callBackFunction, $filter, $translate, $uibModal, $state, UpdateCurrencyResource, $localStorage, authorizationService, appCONSTANTS,ToastService, Currency) {
        var vm = this;
        $scope.language = appCONSTANTS.supportedLanguage;
        //vm.titleDictionary = Currency.titleDictionary;

        vm.currencyObj = Currency;

        vm.close = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
        }

        vm.backdrop = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
        }
        
        $scope.UpdateContact = function () {
            var newCurrency = new UpdateCurrencyResource();
            newCurrency.TitleDictionary = vm.currencyObj.titleDictionary;
            newCurrency.CurrencyId = vm.currencyObj.currencyId;           
           
            newCurrency.$updateCurrency().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('EditSuccess'), "success");
                    $uibModalInstance.dismiss('cancel');
                    callBackFunction();

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
 
    }

})();


