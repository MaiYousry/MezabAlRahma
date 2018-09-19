(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('aboutUsController', ['$scope', 'homePrepService','$stateParams','$translate', 'appCONSTANTS','ToastService', 'aboutUsPrepService', 'contactUsPrepService',  aboutUsController])

    function aboutUsController($scope, homePrepService,$stateParams ,$translate , appCONSTANTS, ToastService, aboutUsPrepService, contactUsPrepService){
        
        $scope.aboutUs = aboutUsPrepService;
        $scope.contactUs = contactUsPrepService;
        $scope.home = homePrepService;
	
        // $scope.style = function() {
        //     return { 
        //         'background': 'url(http://mezab-al-rahma.azurewebsites.net/api/Templates/' + $scope.home.templateId + '/Image)',
             
        //     };
        //  }
	}
	
}
());
