(function () {
    'use strict';

    angular
        .module('home')
        .controller('addAboutUsController', ['$rootScope', '$scope', '$filter','callBackFunction', 'selectedLanguage', '$translate', '$uibModal','$uibModalInstance', '$state', '$localStorage', 'authorizationService', 'templatePrepService', 'TemplatePagingResource', 'appCONSTANTS', 'ToastService', 'AddAboutUsResource', addAboutUsController]);


    function addAboutUsController($rootScope, $scope, $filter,callBackFunction, selectedLanguage, $translate, $uibModal, $uibModalInstance, $state, $localStorage, authorizationService, templatePrepService, TemplatePagingResource,appCONSTANTS, ToastService, AddAboutUsResource) {
        var vm = this;
        $scope.templateList = templatePrepService;
        $scope.templateId="0";
        $scope.template;
        // vm.TitleDictionary;
        vm.DescriptionDictionary;
        vm.HeaderDictionary;
        vm.TitleColoredDictionary;
        vm.SubTitleDictionary;
        vm.BoldArticleDictionary;
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

        $scope.AddNewAboutUs = function () {
            var newAboutUs = new AddAboutUsResource();

            newAboutUs.TemplateId = $scope.templateId;
             newAboutUs.TitleDictionary = vm.TitleDictionary;
            newAboutUs.DescriptionDictionary = vm.DescriptionDictionary;
            // newAboutUs.HeaderDictionary = vm.HeaderDictionary;
            newAboutUs.SubTitleDictionary = vm.SubTitleDictionary;
            newAboutUs.TitleColoredDictionary = vm.TitleColoredDictionary;
            newAboutUs.BoldArticleDictionary = vm.BoldArticleDictionary;
      
            newAboutUs.$addAboutUs().then(
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