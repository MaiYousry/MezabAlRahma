(function () {
    'use strict';

    angular
        .module('home')
        .controller('updateHomeController', ['$rootScope', '$scope','$uibModalInstance', 'UpdateHomeResource', 'templatePrepService','callBackFunction', '$filter', '$translate', '$uibModal', '$state', 'currencyPrepService', 'selectedLanguage', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService','Home', updateHomeController]);


    function updateHomeController($rootScope, $scope, $uibModalInstance, UpdateHomeResource,templatePrepService,callBackFunction, $filter, $translate, $uibModal, $state , currencyPrepService, selectedLanguage, $localStorage, authorizationService, appCONSTANTS,ToastService, Home) {
        var vm = this;
        $scope.homeObj = Home;
        $scope.templateList = templatePrepService;
        $scope.currencyList = currencyPrepService;
        // $scope.currencyId = 0;
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

        $scope.UpdateHome = function () {
            var newHome = new UpdateHomeResource();
            newHome.Rate =  $scope.homeObj.rate;
            // if($scope.homeObj.currencyTypeId.currencyId == undefined){
            //     newHome.CurrencyTypeId = null;
            // }
            // else{
            //     newHome.CurrencyTypeId = $scope.homeObj.currencyTypeId.currencyId;
            // }
            newHome.HomeId =$scope.homeObj.homeId;
            if($scope.templateId == undefined){
                newHome.TemplateId = $scope.homeObj.templateId;
            }
            else{
                newHome.TemplateId = $scope.templateId;
            }
            newHome.Price = $scope.homeObj.price;
            newHome.IsMain =$scope.homeObj.isMain;
            newHome.TitleDictionary = $scope.homeObj.titleDictionary;
            newHome.DescriptionDictionary = $scope.homeObj.descriptionDictionary;
            newHome.SubTitleDictionary = $scope.homeObj.subTitleDictionary;
            newHome.ColoredTitleDictionary = $scope.homeObj.coloredTitleDictionary;
            newHome.$updateHome().then(
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


