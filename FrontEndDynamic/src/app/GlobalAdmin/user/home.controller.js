(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('homeController', ['$scope','$stateParams','$translate', 'appCONSTANTS', 'homePrepService', 'contactUsPrepService',  homeController])

    function homeController($scope,$stateParams,$translate , appCONSTANTS, homePrepService, contactUsPrepService){
        
        $scope.home = homePrepService;
        $scope.contactUs = contactUsPrepService;

        $scope.style = function() {
            return { 
                'background': 'url(http://mezab-al-rahma.azurewebsites.net/api/Templates/' + $scope.home.templateId + '/Image) no-repeat',
                'background-attachment' : 'fixed',
                'background-size' : 'cover',
                'width': '100%',
                'width': '100%'
            };
         }

	}
	
}
());
