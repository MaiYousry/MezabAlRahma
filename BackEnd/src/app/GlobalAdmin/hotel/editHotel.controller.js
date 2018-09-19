(function () {
    'use strict';

    angular
        .module('home')
        .controller('updateHotelController', ['$rootScope', '$scope','$uibModalInstance', 'UpdateHotelResource', 'templatePrepService','callBackFunction', '$filter', '$translate', '$uibModal', '$state', 'currencyPrepService', 'selectedLanguage', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService','Hotel', updateHotelController]);


    function updateHotelController($rootScope, $scope, $uibModalInstance, UpdateHotelResource,templatePrepService,callBackFunction, $filter, $translate, $uibModal, $state , currencyPrepService, selectedLanguage, $localStorage, authorizationService, appCONSTANTS,ToastService, Hotel) {
        var vm = this;
        $scope.hotelObj = Hotel;
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

        $scope.UpdateHotel = function () {
            var newHotel = new UpdateHotelResource();
            newHotel.Rate =  $scope.hotelObj.rate;
            if($scope.hotelObj.currencyTypeId.currencyId == undefined){
                newHotel.CurrencyTypeId = null;
            }
            else{
                newHotel.CurrencyTypeId = $scope.hotelObj.currencyTypeId.currencyId;
            }
            newHotel.HotelId =$scope.hotelObj.hotelId;
            newHotel.TemplateId = $scope.templateId;
            newHotel.Price = $scope.hotelObj.price;
            newHotel.IsMain =$scope.hotelObj.isMain;
            newHotel.TitleDictionary = $scope.hotelObj.titleDictionary;
            newHotel.DescriptionDictionary = $scope.hotelObj.descriptionDictionary;
            newHotel.$updateHotel().then(
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


