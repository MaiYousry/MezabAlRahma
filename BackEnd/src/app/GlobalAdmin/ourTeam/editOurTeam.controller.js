(function () {
    'use strict';

    angular
        .module('home')
        .controller('updateOurTeamController', ['$rootScope', '$scope','$uibModalInstance', 'UpdateOurTeamResource', 'templatePrepService','callBackFunction', '$filter', '$translate', '$uibModal', '$state', 'selectedLanguage', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService','OurTeam', updateOurTeamController]);


    function updateOurTeamController($rootScope, $scope, $uibModalInstance, UpdateOurTeamResource,templatePrepService,callBackFunction, $filter, $translate, $uibModal, $state, selectedLanguage, $localStorage, authorizationService, appCONSTANTS,ToastService, OurTeam) {
        var vm = this;
        $scope.ourTeamObj = OurTeam;
        $scope.templateList = templatePrepService;
        $scope.language = appCONSTANTS.supportedLanguage;
        $scope.selectedLanguage = selectedLanguage;
       
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

        $scope.UpdateOurTeam = function () {
            var newOurTeam = new UpdateOurTeamResource();
            
            newOurTeam.OurTeamId =$scope.ourTeamObj.ourTeamId;
            
            if($scope.templateId == undefined){
                newOurTeam.TemplateId = $scope.ourTeamObj.templateId;
            }
            else{
                newOurTeam.TemplateId = $scope.templateId;
            }
            newOurTeam.IsMain =$scope.ourTeamObj.isMain;
            newOurTeam.TitleDictionary = $scope.ourTeamObj.titleDictionary;
            newOurTeam.DescriptionDictionary = $scope.ourTeamObj.descriptionDictionary;
            newOurTeam.$updateOurTeam().then(
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


