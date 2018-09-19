(function () {
    'use strict';

    angular
        .module('home')
        .controller('updateAboutUsController', ['$rootScope', '$scope','$uibModalInstance', 'UpdateAboutUsResource', 'templatePrepService','callBackFunction', '$filter', '$translate', '$uibModal', '$state', 'selectedLanguage', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService','AboutUs', updateAboutUsController]);


    function updateAboutUsController($rootScope, $scope, $uibModalInstance, UpdateAboutUsResource,templatePrepService,callBackFunction, $filter, $translate, $uibModal, $state , selectedLanguage, $localStorage, authorizationService, appCONSTANTS,ToastService, AboutUs) {
        var vm = this;
        $scope.aboutUsObj = AboutUs;
        $scope.templateList = templatePrepService;
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

        $scope.UpdateAboutUs = function () {
            var newAboutUs = new UpdateAboutUsResource();
          
            newAboutUs.AboutUsId =$scope.aboutUsObj.aboutUsId;
           
            if($scope.templateId == undefined){
                newAboutUs.TemplateId = $scope.aboutUsObj.templateId;
            }
            else{
                newAboutUs.TemplateId = $scope.templateId;
            }
            newAboutUs.TitleDictionary = $scope.aboutUsObj.titleDictionary;
            // newAboutUs.HeaderDictionary = $scope.aboutUsObj.headerDictionary;
            newAboutUs.SubTitleDictionary = $scope.aboutUsObj.subTitleDictionary;
            newAboutUs.TitleColoredDictionary = $scope.aboutUsObj.titleColoredDictionary;
            newAboutUs.DescriptionDictionary = $scope.aboutUsObj.descriptionDictionary;
            newAboutUs.BoldArticleDictionary = $scope.aboutUsObj.boldArticleDictionary;
            newAboutUs.$updateAboutUs().then(
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


