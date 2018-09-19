(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('leadershipController', ['$scope', 'homePrepService','$stateParams','$translate', 'appCONSTANTS','ToastService', 'leadershipPrepService', 'contactUsPrepService',  leadershipController])

    function leadershipController($scope, homePrepService,$stateParams ,$translate , appCONSTANTS, ToastService, leadershipPrepService, contactUsPrepService){
        
        $scope.leadership = leadershipPrepService;
        $scope.contactUs = contactUsPrepService;
        $scope.home = homePrepService;
        
	
			
	}
	
}
());
