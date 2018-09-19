(function () {
    'use strict';

    angular
        .module('home')
        .controller('updateOfferController', ['$rootScope', '$scope','$uibModalInstance', 'UpdateOfferResource', 'templatePrepService','callBackFunction', '$filter', '$translate', '$uibModal', '$state', 'currencyPrepService', 'selectedLanguage', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService','Offer', updateOfferController]);


    function updateOfferController($rootScope, $scope, $uibModalInstance, UpdateOfferResource,templatePrepService,callBackFunction, $filter, $translate, $uibModal, $state , currencyPrepService, selectedLanguage, $localStorage, authorizationService, appCONSTANTS,ToastService, Offer) {
        var vm = this;
        $scope.offerObj = Offer;
        $scope.templateList = templatePrepService;
        $scope.currencyList = currencyPrepService;
        $scope.language = appCONSTANTS.supportedLanguage;
        $scope.selectedLanguage = selectedLanguage;
       

        //var contactIDD = vm.contactObj.contactID;

        vm.close = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
        }

        vm.backdrop = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
        }

        $scope.changeId=function (val){
            $scope.templateId=val;
        }

        $scope.UpdateOffer = function () {
            var newOffer = new UpdateOfferResource();
            newOffer.Rate =  $scope.offerObj.rate;
            if($scope.offerObj.currencyTypeId.currencyId == undefined){
                newOffer.CurrencyTypeId = null;
            }
            else{
                newOffer.CurrencyTypeId = $scope.offerObj.currencyTypeId.currencyId;
            }
            newOffer.OfferId =$scope.offerObj.offerId;
            newOffer.TemplateId = $scope.templateId;
            newOffer.Price = $scope.offerObj.price;
            newOffer.IsMain =$scope.offerObj.isMain;
            newOffer.TitleDictionary = $scope.offerObj.titleDictionary;
            newOffer.DescriptionDictionary = $scope.offerObj.descriptionDictionary;
            newOffer.$updateOffer().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('EditSuccess'), "success");
                    $uibModalInstance.dismiss('cancel');
                    //$state.go('product');
                    callBackFunction();

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
 
    }

})();


