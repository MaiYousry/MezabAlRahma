(function() {
    'use strict';

    angular
        .module('home')
        .controller('homeCtrl', ['$rootScope','$translate', '$scope', 'appCONSTANTS',  '$state','ContactUsResource', '$localStorage', homeCtrl])
       
    function homeCtrl($rootScope, $translate, $scope, appCONSTANTS, $state, ContactUsResource, $localStorage) {
   
        var vm=this;

        var contactUs = ContactUsResource.getContactUs().$promise.then(function(results) {
             $scope.contactUsHome = results;
        
        },
        function(data, status) {
            ToastService.show("right","bottom","fadeInUp",$translate.instant('NoData'),"error");
        });
    

		$scope.languages = [{
            id:"en",
            label:"english"
        },
        {
            id:"ar",
            label:"arabic"
        }];
		if($localStorage.language == null){
            $scope.selectedLanguage = $scope.languages[1].id;
            $localStorage.language = $scope.selectedLanguage;
        }
        else
            $scope.selectedLanguage = $localStorage.language;
            
        $translate.use($scope.selectedLanguage); 
		
     
		$scope.changeLanguage = function(language){
			$scope.selectedLanguage = language;
			$localStorage.language = $scope.selectedLanguage;
            $state.reload();
            $translate.use(language); 
		}
		$scope.getCurrentTime = function(){
			return (new Date()).getTime()
		}
		
		
    }

    
}());
