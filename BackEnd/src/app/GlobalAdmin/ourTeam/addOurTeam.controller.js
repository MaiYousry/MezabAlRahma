(function () {
    'use strict';

    angular
        .module('home')
        .controller('addOurTeamController', ['$rootScope', '$scope', '$filter','callBackFunction', 'selectedLanguage', '$translate', '$uibModal','$uibModalInstance', '$state', '$localStorage', 'authorizationService', 'templatePrepService', 'TemplatePagingResource', 'appCONSTANTS', 'ToastService', 'AddOurTeamResource', addOurTeamController]);


    function addOurTeamController($rootScope, $scope, $filter,callBackFunction, selectedLanguage, $translate, $uibModal, $uibModalInstance, $state, $localStorage, authorizationService, templatePrepService, TemplatePagingResource,appCONSTANTS, ToastService, AddOurTeamResource) {
        var vm = this;
        $scope.templateList = templatePrepService;
        $scope.templateId="0";
        $scope.Rate = 0;
        $scope.template;
        $scope.Price;
        $scope.IsMain = false;
        vm.TitleDictionary;
        vm.DescriptionDictionary;
        $scope.language = appCONSTANTS.supportedLanguage;
        $scope.selectedLanguage = selectedLanguage;
        
        // console.log(appCONSTANTS.supportedLanguage);
        $scope.changeId=function (val){
            $scope.templateId=val;
        }
        
        function refreshTemplates(){
			var k = TemplatePagingResource.getAllPagingTemplates({page:vm.currentPage}).$promise.then(function(results) {
				$scope.templateList = results
				//console.log(vm.Templates);
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

		vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshTemplates();
        }

        vm.close = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
		}

        $scope.AddNewOurTeam = function () {
            var newOurTeam = new AddOurTeamResource();
            if($scope.templateId == 0){
                newOurTeam.TemplateId = $scope.templateList.results[0].templateId;
            }
            else{
                newOurTeam.TemplateId = $scope.templateId;
            }
            newOurTeam.IsMain = $scope.IsMain;
            newOurTeam.TitleDictionary = vm.TitleDictionary;
            newOurTeam.DescriptionDictionary = vm.DescriptionDictionary;
      
            newOurTeam.$addOurTeam().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddSuccess'), "success");
                    callBackFunction();
                    //close popup after save
                    $uibModalInstance.dismiss('cancel');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

    }

}());