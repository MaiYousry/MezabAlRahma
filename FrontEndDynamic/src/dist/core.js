(function() {
    'use strict';

    angular
    .module('core', [
    		'ngResource',
        'ui.router',
        //'ngMaterial',
        'ngStorage',
        // 'permission',
        // 'bw.paging',
        //'angular-progress-arc',
        // 'ui.event',
        'ngProgressLite',
        // 'ui.bootstrap',
        'pascalprecht.translate',
        // 'textAngular',
        // 'blockUI'
    ]);
}());
;(function() {
  'use strict';

  angular
  .module('home', [
  'core'
  ]);
 
}());
;(function() {
  'use strict';

  angular
      .module('core')
      // registering 'lodash' as a constant to be able to inject it later
      .constant('_', window._)
      .run(function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      })
/*      .config(function($mdThemingProvider, $mdIconProvider) {
        // angular material design configs
        $mdIconProvider
            .defaultIconSet('./assets/svg/avatars.svg', 128);

        // use default purble color for now - uncomment to change colors
        $mdThemingProvider.theme('default')
            .primaryPalette('cyan')
            .accentPalette('orange');
      })*/;

      
}());
;(function() {
	angular
		.module('core')
		.constant('appCONSTANTS', { 
			'API_URL': 'http://mezab-al-rahma.azurewebsites.net/api/',
			// 'API_URL': 'http://localhost:3152/api/',
			'defaultLanguage':'en'
		})
		.constant('messageTypeEnum', {
			success: 0,
			warning: 1,
			error: 2
		}).constant('userRolesEnum', {
			GlobalAdmin:"GlobalAdmin"
    });
}());;(function() {
    'use strict';

    angular
        .module('core')
        .config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            // main views
            $stateProvider
                .state('root', {
                    url: '/homes',
                    templateUrl: './app/GlobalAdmin/user/templates/home.html'
                })
                .state('403', {
                    url: '/403',
                    templateUrl: './app/shell/403.html'
                })
                .state('404', {
                    url: '/404',
                    templateUrl: './app/shell/404.html'
                })
                .state('401', {
                    url: '/401',
                    templateUrl: './app/shell/401.html'
                })
        });
    
}());
;(function() {
    'use strict';
  
    angular
    .module('core').config(["$translateProvider","appCONSTANTS",function($translateProvider,appCONSTANTS){
          
          var en_translations = { 
            "Email":"Email: ",
            "WhatsApp" : "WhatsApp: ",
            "Mobile":"Mobile:",
            "LeadershipTeam":"Leadership Team",
            "Leadership":"Leadership",
            "Home":"Home",
            "AboutUs":"About Us",
            "ContactUs":"Contact Us",
            "Language":"Language"
                       
          }
          
          var ar_translations = {
           "Email":"البريد الالكتروني: ",
           "WhatsApp":"واتس اب: ",
           "Mobile":"رقم الجوال: ",
           "LeadershipTeam":"فريق القيادة",
           "Leadership": "القيادة",
           "Home":"الرئيسيه",
           "ContactUs": "تواصل",
           "AboutUs":"عن ميزاب",
           "Language":"اللغه"
          }
          
          $translateProvider.translations('en',en_translations);
          
          $translateProvider.translations('ar',ar_translations);
          
          $translateProvider.preferredLanguage(appCONSTANTS.defaultLanguage);
          
          }]);
  
  }());
  ;(function() {
    angular
        .module('home')
        .factory('ToastService', ToastService);

    function ToastService() {
        return {
            show: function($positionX,$positionY,$dataEffect,$dataMessage,$dataType,$actionText,$action,$duration){
			
					
				if($(window).width() < 768){
					$positionX = "center";
				}else {
					$positionX = $positionX;
				}		

				if(!$(".pmd-alert-container."+ $positionX +"."+ $positionY).length){
					$('body').append("<div class='pmd-alert-container "+$positionX+" "+$positionY+"'></div>");
				}
					
				var $currentPath = $(".pmd-alert-container."+ $positionX +"."+ $positionY);
				function notificationValue(){
					if($action == "true"){
						if($actionText == null){
							$notification =  "<div class='pmd-alert' data-action='true'>"+$dataMessage+"<a href='javascript:void(0)' class='pmd-alert-close'>×</a></div>";
						}else{
							$notification =  "<div class='pmd-alert' data-action='true'>"+$dataMessage+"<a href='javascript:void(0)' class='pmd-alert-close'>"+$actionText+"</a></div>";	
						}
						return $notification;
					}else {
						if($actionText == null){
							$notification = "<div class='pmd-alert' data-action='false'>"+$dataMessage+"</div>";
						}else{
							$notification =  "<div class='pmd-alert' data-action='false'>"+$dataMessage+"<a href='javascript:void(0)' class='pmd-alert-close'>"+$actionText+"</a></div>";	
						}
						return $notification;
					}
				}
				var $notification = notificationValue();
				var boxLength = $(".pmd-alert-container."+ $positionX +"."+ $positionY + " .pmd-alert").length;
				
				if($(this).attr("data-duration") !== undefined){
					$duration = $(this).attr("data-duration");
				}else {
					$duration = 3000;
				}
				
				if (boxLength > 0) {
					if ($positionY == 'top') {
						$currentPath.append($notification);
					}
					else {
						$currentPath.prepend($notification);
					}
					$currentPath.width($(".pmd-alert").outerWidth());
					if($action == "true"){
						$currentPath.children("[data-action='true']").addClass("visible" +" "+ $dataEffect);	
					}else{
						$currentPath.children("[data-action='false']").addClass("visible" +" "+ $dataEffect).delay($duration).slideUp(
							function(){
								$(this).removeClass("visible" +" "+ $dataEffect).remove();
							});	
					}
					$currentPath.children(".pmd-alert").eq(boxLength).addClass($dataType);
				}else {
					$currentPath.append($notification);
					$currentPath.width($(".pmd-alert").outerWidth());
					if($action == "true"){
						$currentPath.children("[data-action='true']").addClass("visible" +" "+ $dataEffect);	
					}else{
						$currentPath.children("[data-action='false']").addClass("visible" +" "+ $dataEffect).delay($duration).slideUp(
							function(){
								$(this).removeClass("visible" +" "+ $dataEffect).remove();
							});	
					}
					$currentPath.children(".pmd-alert").eq(boxLength).addClass($dataType);
				}
				var $middle = $(".pmd-alert").outerWidth() / 2;  
				$(".pmd-alert-container.center").css("marginLeft","-" + $middle+"px");
		}
		
        }

    }


}());
;(function() {
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
