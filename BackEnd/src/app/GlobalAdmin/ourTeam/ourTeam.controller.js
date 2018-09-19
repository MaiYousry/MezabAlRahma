(function () {
    'use strict';

    angular
        .module('home')
        .controller('ourTeamController', ['$rootScope', '$http', '$scope', '$filter', 'templatePrepService', 'CurrencyResource','OurTeamPagingResource', 'TemplatePagingResource', 'ourTeamPagingPrepService', 'DeleteOurTeamResource', '$translate', '$uibModal', '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', ourTeamController]);


    function ourTeamController($rootScope, $http, $scope, $filter, templatePrepService, CurrencyResource, OurTeamPagingResource, TemplatePagingResource, ourTeamPagingPrepService, DeleteOurTeamResource, $translate, $uibModal, $state, $localStorage, authorizationService, appCONSTANTS, ToastService) {
        var vm = this;
     
         $scope.Rate=0;
         $scope.ourTeamList = ourTeamPagingPrepService;
         $scope.templateList = templatePrepService;
         $scope.language = appCONSTANTS.supportedLanguage;
         
        function refreshOurTeams(){
			var k = OurTeamPagingResource.getAllPagingOurTeams({page:vm.currentPage}).$promise.then(function(results) {
				//vm.Now = $scope.getCurrentTime();	
				$scope.ourTeamList = results;
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

        vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshOurTeams();
		}
        
        function confirmationDelete(ourTeamId){
			DeleteOurTeamResource.deleteOurTeam({ourTeamId:ourTeamId}).$promise.then(function(results) {
                ToastService.show("right","bottom","fadeInUp",$translate.instant('DeleteSuccess'),"success");
                vm.currentPage = 1;
				refreshOurTeams();
            },
            
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

        vm.UpdateOurTeam = function (ourTeam) {
            TemplatePagingResource.getAllPagingTemplates().$promise.then(function(results) {
                $uibModal.open({
                    templateUrl: './app/GlobalAdmin/ourTeam/templates/editOurTeam.html',
                    controller: 'updateOurTeamController',
                    controllerAs: 'updateOurTeamCtrl',
                    resolve:{
                        templatePrepService: function(){return results;},
                        callBackFunction: function(){return refreshOurTeams;},
                        selectedLanguage: function(){return $scope.selectedLanguage},
                        OurTeam: function(){return ourTeam}
                    }
    
                });
            },
            function(data, status) {
                ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }
        
        vm.AddOurTeam = function () {
            TemplatePagingResource.getAllPagingTemplates().$promise.then(function(results) {
                $uibModal.open({
                    templateUrl: './app/GlobalAdmin/ourTeam/templates/addOurTeam.html',
                    controller: 'addOurTeamController',
                    controllerAs: 'addOurTeamCtrl',
                    resolve:{
                        templatePrepService: function(){return results;},
                        callBackFunction: function(){return refreshOurTeams;},
                        selectedLanguage: function(){return $scope.selectedLanguage}
                    }
    
                });
            },
            function(data, status) {
                ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
          
        }

        vm.DeleteTemplate = function(ourTeamId){			
			var modalContent = $uibModal.open({
				templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
				controller: 'confirmDeleteDialogController',
				controllerAs: 'deleteDlCtrl',
				resolve: {
                    itemId: function() { return ourTeamId },
                    itemName: function() { return null },
                    message: function() { return null },
					callBackFunction:function() { return confirmationDelete; }
				}
				
			});
		}
    }
    

}());