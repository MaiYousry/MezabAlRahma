(function() {
    'use strict';

    angular
    .module('core', [
    		'ngResource',
        'ui.router',
        //'ngMaterial',
        'ngStorage',
      'permission',
      'bw.paging',
      //'angular-progress-arc',
      'ui.event',
      'ngProgressLite',
    'ui.bootstrap',
    'pascalprecht.translate',
    'textAngular',
    'slickCarousel'
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
			'defaultLanguage':'en',
			'supportedLanguage':{
				'en':{'key':'en','value':'english'},
				'ar':{'key':'ar','value':'arabic'}
			}
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
                    url: '/',
               
                    controller: 'loginController',
                   
                    data: {
                       permissions: {
                          
                        }
                    },
                 
                })
                .state('login', {
                    url: '/login',
                    templateUrl: './app/core/login/templates/login.html',
                    'controller': 'loginController'
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
;
angular.module('core')

  .directive('equalto', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      scope: {
        otherModelValue: '=equalto'
      },
      link: function(scope, element, attributes, ngModel) {

        ngModel.$validators.equalto = function(modelValue) {
          return modelValue == scope.otherModelValue.$modelValue;
        };
        scope.$watch('otherModelValue.$modelValue', function() {
          ngModel.$validate();
        },true);

      }
    };
  }

)
.directive('numbersOnly', function () {
  return {
      require: 'ngModel',
      link: function (scope, element, attr, ngModelCtrl) {
          function fromUser(text) {
              if (text) {
                  var transformedInput = text.replace(/[^0-9]/g, '');

                  if (transformedInput !== text) {
                      ngModelCtrl.$setViewValue(transformedInput);
                      ngModelCtrl.$render();
                  }
                  return transformedInput;
              }
              return undefined;
          }            
          ngModelCtrl.$parsers.push(fromUser);
      }
  };
})
.directive('loadingPane', function ($timeout, $window) {
  return {
      restrict: 'A',
      link: function (scope, element, attr) {
          var directiveId = 'loadingPane';

          var targetElement;
          var paneElement;
          var throttledPosition;

          function init(element) {
              targetElement = element;

              paneElement = angular.element('<div>');
              paneElement.addClass('loading-pane');

              if (attr['id']) {
                  paneElement.attr('data-target-id', attr['id']);
              }

              var spinnerImage = angular.element('<div>');
              spinnerImage.addClass('spinner-image');
              spinnerImage.appendTo(paneElement);

              angular.element('body').append(paneElement);

              setZIndex();

              //reposition window after a while, just in case if:
              // - watched scope property will be set to true from the beginning
              // - and initial position of the target element will be shifted during page rendering
              $timeout(position, 100);
              $timeout(position, 200);
              $timeout(position, 300);

              throttledPosition = _.throttle(position, 50);
              angular.element($window).scroll(throttledPosition);
              angular.element($window).resize(throttledPosition);
          }

          function updateVisibility(isVisible) {
              if (isVisible) {
                  show();
              } else {
                  hide();
              }
          }

          function setZIndex() {                
              var paneZIndex = 500;

              paneElement.css('zIndex', paneZIndex).find('.spinner-image').css('zIndex', paneZIndex + 1);
          }

          function position() {
              paneElement.css({
                  'left': targetElement.offset().left,
                  'top': targetElement.offset().top - $(window).scrollTop(),
                  'width': targetElement.outerWidth(),
                  'height': targetElement.outerHeight()
              });
          }

          function show() {
              paneElement.show();
              position();
          }

          function hide() {
              paneElement.hide();
          }

          init(element);

          scope.$watch(attr[directiveId], function (newVal) {
              updateVisibility(newVal);
          });

          scope.$on('$destroy', function cleanup() {
              paneElement.remove();
              $(window).off('scroll', throttledPosition);
              $(window).off('resize', throttledPosition);
          });
      }
  };
});
;
;(function() {
    'use strict';
  
    angular
    .module('core').config(["$translateProvider","appCONSTANTS",function($translateProvider,appCONSTANTS){
          
          var en_translations = {
              "Title":"Title",
              "Description":"Description",
              "Rate":"Rate",
              "Price":"Price",
              "Currency":"Currency",
              "IsMain":"Is Main",
              "Home":"Home",
              "AboutUs": "About Us",
              "Template":"Image",
              "NoHomeAvailable": "No Home Content Available",
              "NoTemplateAvailable":"No Image Available",
              "NewTemplateLbl":"Add Image",
              "deleteBtn":"Delete",
              "UploadImageBtn":"Upload image",
              "requiredErr":"Required Field",
              "saveChangesBtn":"Save changes",
              "DiscardBtn":"Discard",
              "AddBtn":"Add", 
              "deleteConfirmationLbl":"Delete Confirmation",
              "AddHomeLbl":"Add Home",
              "TextOnly":"Text Only",
              "PriceLengthError": "Price should be from 1:10 numbers",
              "NameLengthError": "Number of characters should be from 2:50 characters",
              "NameLengthError500": "Number of characters should be from 3:500 characters",
              "NameLengthError50":"Number of characters should be from 2:50 characters",
              "NameLengthError400":"Number of characters should be from 2:400 characters",
              "Currency": "Currency",
              "AddCurrencyLbl": "Add Currency",
              "Edit": "Edit",
              "UpdateCurencyLbl": "Update Currency",
              "UpdateHomeLbl": "Update Home",
              "Yes":"Yes",
              "No":"No",
              "Offers":"Offers",
              "OurTeams": "Our Team",
              "Hotels":"Hotels",
              "NoContactUsAvailable": "No Contact Us Content Available",
              "NoOfferAvailable":"No Offer Content Available",
              "Email":"Email",
              "Number":"Mobile number",
              "Location":"Location",
              "ContactUs":"Contact Us",
              "logoutBtn":"logout",
              "NoOurTeamAvailable":"No Our Team Content Available",
              "NoCurrencyAvailable": "No Currency Content Available",
              "AddOfferLbl": "Add Offer",
              "AddOurTeamLbl": "Add member",
              "SaveAndExitBtn": "Save",
              "NoHotelAvailable":"No Hotel Content Available",
              "AddHotelLbl":"Add Hotel",
              "AddContactUsLbl":"Add Contact",
              "OwnerEmail": "Owner's Email",
              "MobileNumberLbl":"Mobile number",
              "NoAboutUsAvailable":"No About Us Content Available",
              "AddAboutUsLbl":"Add About Us",
              "Header":"Header",
              "SubTitle":"Sub-Title",
              "TitleColored":"Colored Title",
              "BoldArticle":"Bold Article",
              "AddSuccess": "Added Successfully",
              "EditSuccess":"Edited Successfully",
              "deleteBtn":"Delete",
              "cancelBtn":"Cancel",
              "NameLengthError7":"Number of characters should be from 2:7 characters",
              "NameLengthError10":"Number of characters should be from 2:10 characters",
              "NameLengthError15":"Number of characters should be from 2:15 characters",
              "NameLengthError100800":"Number of characters should be from 100:800 characters",
              "UpdateAboutUsLbl":"Update About Us",
              "NameLengthError80":"Number of characters should be from 2:80 characters",
              "NameLengthError16":"Number of characters should be from 2:16 characters",
              "NameLengthError120":"Number of characters should be from 2:120 characters",
              "NameLengthError700":"Number of characters should be from 2:700 characters",
              "UpdateOurTeamLbl": "Edit member's data",
              "WhatsAppNumberLbl" : "WhatsApp Number",
              "FacebookLink":"Facebook Account URL",
              "GmailLink":"Google+ Account URL",
              "TwitterLink":"Twitter Account URL",
              "Sections":"Show/hide sections and icons",
              "ShowEmail":"Show Email",
              "ShowMobile":"Show Mobile",
              "ShowOwnerEmail":"Show Owner's Email",
              "ShowWhatsApp":"Show WhatsApp",
              "ShowFacebook":"Show Facebook icon",
              "ShowGmail":"Show Gmail icon",
              "ShowTwitter":"Show Twitter icon",
              "UpdateContactUsLbl":"Update Contact Us",
              "LinkOnly":"Link Only",

          }
          
          var ar_translations = {
              "Title":"عنوان",
              "Description":"التفاصيل",
              "Rate":"تقييم",
              "Price":"السعر",
              "Currency":"العملة",
              "IsMain":"اساسي؟",
              "Home":"الرئيسية",
              "AboutUs": "عنا",
              "Template":"صورة",
              "NoHomeAvailable": "لا يوجد محتوي للصفحة الرئيسية",
              "NoTemplateAvailable":"لا يوجد صورة متاحة",
              "NewTemplateLbl":"اضافة صورة",
              "deleteBtn":"حذف",
              "UploadImageBtn":"اختر صوره",
              "requiredErr":"حقل مطلوب",
              "saveChangesBtn":"حفظ",
              "DiscardBtn":"تجاهل",
              "AddBtn":"اضافه",
              "deleteConfirmationLbl":"تأكيد الحذف",
              "AddHomeLbl":"اضافة رئيسيه",
              "TextOnly":"حروف فقط",
              "PriceLengthError": "السعر يجب ان يكون من 1:10 ارقام",
              "NameLengthError": "عدد الحروف يجب ان يكون من 2:50 حرف",
              "NameLengthError500": "عدد الحروف يجب ان يكون من 3:500 حرف",
              "NameLengthError50":"عدد الحروف يجب ان يكون من 2:50 حرف",
              "NameLengthError400":"عدد الحروف يجب ان يكون من 2:400 حرف",
              "Currency": "العملة",
              "AddCurrencyLbl": "اضافة عملة",
              "Edit":"تعديل",
              "UpdateCurencyLbl": "تعديل العملة",
              "UpdateHomeLbl": "تعديل الرئيسيه",
              "Yes":"نعم",
              "No":"لا",
              "Offers": "عروض",
              "OurTeams":"فريقنا",
              "Hotels":"فنادق",
              "NoContactUsAvailable": "لا يوجد محتوي لصفحة التواصل",
              "Email":"البريد الالكتروني",
              "Number":"رقم الجوال",
              "Location":"الموقع الجغرافي",
              "ContactUs":"تواصل معنا",
              "logoutBtn":"الخروج",
              "NoOfferAvailable":"لا يوجد محتوي لصفحة العروض",
              "NoOurTeamAvailable":"لا يوجد محتوي لصفحة الفريق",
              "NoCurrencyAvailable": "لا يوجد محتوي لصفحة العملة",
              "AddOfferLbl": "اضافة عرض",
              "AddOurTeamLbl": "اضافة عضو",
              "SaveAndExitBtn": "حفظ",
              "NoHotelAvailable": "لا يوجد محتوي لصفحة الفنادق",
              "AddHotelLbl":"اضافة فندق",
              "AddContactUsLbl":"اضافة تواصل",
              "OwnerEmail": "ايميل المالك",
              "MobileNumberLbl":"رقم الجوال",
              "NoAboutUsAvailable":"لا يوجد محتوي لصفحة عنا",
              "AddAboutUsLbl":"اضافة عنا",
              "Header":"عنوان اخر",
              "SubTitle":"عنوان فرعي",
              "TitleColored":"عنوان ملون",
              "BoldArticle":"عنوان مميز",
              "AddSuccess": "تمت الاضافة بنجاح",
              "EditSuccess":"تم التعديل بنجاح",
              "deleteBtn":"حذف",
              "cancelBtn":"الغاء",
              "NameLengthError7":"عدد الحروف يجب ان يكون من 2:7 حرف",
              "NameLengthError10":"عدد الحروف يجب ان يكون من 2:10 حرف",
              "NameLengthError15":"عدد الحروف يجب ان يكون من 2:15 حرف",
              "NameLengthError100800":"عدد الحروف يجب ان يكون من 100:800 حرف",
              "UpdateAboutUsLbl": "تعديل عنا",
              "NameLengthError80": "عدد الحروف يجب ان يكون من 2:80 حرف",
              "NameLengthError16":"عدد الحروف يجب ان يكون من 2:16 حرف",
              "NameLengthError120":"عدد الحروف يجب ان يكون من 2:120 حرف",
              "NameLengthError700":"عدد الحروف يجب ان يكون من 2:700 حرف",
              "UpdateOurTeamLbl":"تعديل بيانات العضو",
              "WhatsAppNumberLbl" : "رقم الواتس",
              "FacebookLink":"عنوان حساب الفيس بوك",
              "GmailLink":"عنوان حساب جوجل+",
              "TwitterLink":"عنوان حساب تويتير",
              "Sections":"اظهار/اخفاء الأقسام و الايقونات",
              "ShowEmail":"اظهار البريد الالكتروني",
              "ShowMobile":"اظهار رقم الجوال",
              "ShowOwnerEmail":"اظهار البريد الاكتروني الخاص بالمالك",
              "ShowWhatsApp":"اظهار رقم الواتس اب",
              "ShowFacebook":"اظهار ايقونة الفيس بوك",
              "ShowGmail":"اظهار ايقونة جوجل",
              "ShowTwitter":"اظهار ايقونة تويتر",
              "UpdateContactUsLbl":"تعديل التواصل",
              "LinkOnly":"عنوان فقط",

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
;(function () {
    'use strict';	
    angular
        .module('home')
        .controller('confirmDeleteDialogController', ['$uibModalInstance', 'itemName','itemId','message', 'callBackFunction',  confirmDeleteDialogController])
	                                    	
	function confirmDeleteDialogController($uibModalInstance, itemName,itemId,message, callBackFunction){
		var vm = this;
		vm.itemName = itemName;
		vm.message = message;
		vm.itemId = itemId;
	
		vm.close = function(){
			$uibModalInstance.dismiss();
		}
		
		vm.Confirm = function(){
			callBackFunction(itemId);
			$uibModalInstance.dismiss();
		}
	}	
}());
;(function() {
    'use strict';

    angular
        .module('home')
        .controller('loginController', ['$rootScope', '$scope','$state','$localStorage','authorizationService','appCONSTANTS',loginController]);
   
    function loginController($rootScope, $scope,$state, $localStorage,authorizationService,appCONSTANTS) {
    
		if ($localStorage.authInfo) {  
			if ($localStorage.authInfo.Role  == "GlobalAdmin") {
				$state.go('groups');

			}  
		}
		else
		{
			 $state.go('login');
		}
	}

}());(function() {
    'use strict';

    angular
        .module('home')
        .controller('homeCtrl', ['$rootScope','$translate', '$scope', 'appCONSTANTS',  '$state',  '_', 'authenticationService', 'authorizationService', '$localStorage', homeCtrl])
       
    function homeCtrl($rootScope, $translate, $scope, appCONSTANTS, $state, _,authenticationService, authorizationService,$localStorage) {
        $scope.$on('LOAD',function(){$scope.loading=true});
        $scope.$on('UNLOAD',function(){$scope.loading=false});
        var vm=this;
        //show sidebar
        $rootScope.sidebar = {
            show  : true
          };
        $scope.sidebar = $rootScope.sidebar;
        //show header
        $rootScope.header = {
            show  : true
          };
        $scope.header = $rootScope.header;
        //End

        $scope.emailEmpty = false;
        $scope.passwordEmpty = false;
		$scope.languages = [{
            id:"en",
            label:"english"
        },
        {
            id:"ar",
            label:"arabic"
        }];
		if($localStorage.language == null){
            $scope.selectedLanguage = $scope.languages[0].id;
            $localStorage.language = $scope.selectedLanguage;
        }
        else
            $scope.selectedLanguage = $localStorage.language;
            
        $translate.use($scope.selectedLanguage); 
		$scope.init =
            function() {
				$scope.user = authorizationService.getUser();
            }
        $scope.init();
		
        $scope.submit = function(username, password) {
           
            authorizationService.isPasswordchanged=false;
            $('#passwordChanged').hide();
          //  $('#userInActivated').hide();
            if (!username)
                $scope.emailEmpty = true;
            if (!password)
                $scope.passwordEmpty = true;;
            if (username && password) {
                $scope.afterSubmit = false;
                $scope.emailEmpty = $scope.passwordEmpty = false;
                authenticationService.authenticate(username, password).then(loginSuccess,loginFailed)
                    //.error(loginFailed);;
            } else {
                $scope.afterSubmit = false;
            }
        };
		
        $scope.reloadPage = true;
        $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
            if(fromState.name != "" && $scope.reloadPage){
                    e.preventDefault();
                    $scope.reloadPage = false;
                    $state.go(toState.name,toParams, { reload: true });
                }     
        });

		$scope.$watch(function () { return $localStorage.authInfo; },function(newVal,oldVal){
		   if(oldVal!=undefined && newVal === undefined && $localStorage.authInfo == undefined){
			 console.log('logout'); 
			   $state.go('login');
		  }
		  if(oldVal===undefined && newVal !== undefined&&$localStorage.authInfo != undefined){
			 console.log('login'); 
					$scope.user = authorizationService.getUser();
					loginSuccess()
			// authorizationService.isLoggedIn() && !location.href.contains('connect')
		  }
		})
        function loginSuccess(response) {
            $scope.afterSubmit = false;
            $scope.invalidLoginInfo = false;
            $scope.inActiveUser = false;
            $scope.user = authorizationService.getUser();
            if ($scope.user.role == "GlobalAdmin") {
                $state.go('groups');

            }  
            else  {
                authorizationService.logout();
                $state.go('login');
            } 

        }

        function loginFailed(response) {
            $scope.afterSubmit = true;
            
             $scope.invalidLoginInfo = true;
            if (response) {
                if (response.data.error == "invalid grant") {
                    $scope.invalidLoginInfo = true;
                    $scope.inActiveUser = false;
                }
                if (response.data.error == "inactive user") {
                    $scope.invalidLoginInfo = false;
                    $scope.inActiveUser = true;
                }
            }
            if (response == null) {
                $scope.invalidLoginInfo = false;
                $scope.inActiveUser = true;
            }
        }

        $scope.logout = function() {
            authorizationService.logout();
            $state.go('login');
        }
        $scope.reset = function() {
            $scope.invalidLoginInfo = false;
            $scope.inActiveUser = false;
        }
        $scope.isLoggedIn = function() {
            return authorizationService.isLoggedIn();
        }
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
;(function() {
  'use strict';

  angular
    .module('core')
    .constant('AUTH_EVENTS', {
      loginFailed : 'login-failed',
      loginSuccess : 'login-success',
      logoutSuccess : 'logout-success',
      refreshedToken : 'refresh-token-success',
      invalidToken : 'invalid-token',
      failedToAuthorize: 'not-authorized',
      invalidRefreshToken: 'refresh-token-failure',
      passwordChanged: 'password-changed'

    });
}());
;(function() {
  'use strict';

  angular
    .module('core')
    .factory('authEventsHandlerService', authEventsHandlerService);

    authEventsHandlerService.$inject = ['$rootScope', 'AUTH_EVENTS', '$state'];

  function authEventsHandlerService($rootScope, AUTH_EVENTS, $state) {
    var factory = {
      initialize : initialize
    }

    return factory;

    function initialize() {
      $rootScope.$on(AUTH_EVENTS.logoutSuccess,logoutHandler);
    }

    function logoutHandler(){
      $state.go('login');
    }
  }
}());
;(function() {
  'use strict';

  angular
    .module('core')
    .factory('authenticationService', authenticationService);

  authenticationService.$inject = ['$injector', 'appCONSTANTS', 'authorizationService', 'AUTH_EVENTS', '$rootScope', '$q'];

  function authenticationService($injector, appCONSTANTS, authorizationService, AUTH_EVENTS, $rootScope, $q) {

    var factory = {
      authenticate: authenticate,
      getToken: getToken,
      isAuthenticated: isAuthenticated
    };

    return factory;

    function authenticate(email, password) {
      var credentials = {
        'username': email,
        'password': password
      }
      var request = requestToken(credentials, 'password');
      request.then(authenticated,authenticaionFailed);
      return request;
        
        //.error(authenticaionFailed);

    }


    function authenticated(data) {
      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      return data;
    }

    function authenticaionFailed(data) {
      $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
      return data;
    }

    function getToken(forceRefresh) {
      if(!isAuthenticated()){
        return $q.reject({
          status : 401
        });
      }
      var authInfo = authorizationService.getAuthInfo();
      var expirydate = new Date(authInfo['.expires']); 
      if (forceRefresh || new Date() >= expirydate) {
        return refreshToken(authInfo['refresh_token']).then(refreshedToken,function(){
         authorizationService.logout();
        });
      }
      var defer = $q.defer();
      defer.resolve(authInfo);
      return defer.promise;
    }

    function isAuthenticated() {
      return !!authorizationService.getAuthInfo();
    }

    function refreshToken(refreshToken) {
      var credentials = {
        'refresh_token': refreshToken
      };
      return requestToken(credentials, 'refresh_token');
    }

    function refreshedToken(response){
      $rootScope.$broadcast(AUTH_EVENTS.refreshedToken);
      authorizationService.setAuthInfo(response);
      return response.data;
    }


    function requestToken(credentials, grantType) {
      angular.extend(credentials, {
          //'client_id': vlCONSTANTS.API_Client_Id,
        'grant_type': grantType
      });

      var config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      var $http = $injector.get("$http");
	  var result = $http
        .post(appCONSTANTS.API_URL + "token", $.param(credentials), config);
		result.then(function(data){
          authorizationService.setAuthInfo(data);
        });
      return result;
        
    }
  }
})();
;(function() {
  'use strict';
  (function() {
    angular
      .module('core')
      .factory('unAuthenticatedInterceptor', unAuthenticatedInterceptor);

    unAuthenticatedInterceptor.$inject = ['$q','$rootScope','AUTH_EVENTS'];

    function unAuthenticatedInterceptor($q,$rootScope,AUTH_EVENTS) {
      var factory = {
        responseError: responseErrorInterceptor
      };
      return factory;

      function responseErrorInterceptor(rejection) {
          if(rejection.status == 403) {
              $rootScope.$broadcast(AUTH_EVENTS.failedToAuthorize);
          }else if (rejection.status == 401) {
            if (rejection.data=="password changed") {
              $rootScope.$broadcast(AUTH_EVENTS.passwordChanged);
            }
            else {
              $rootScope.$broadcast(AUTH_EVENTS.invalidToken);
            }
          }
          else if (rejection.status == 406) {
              $rootScope.$broadcast(AUTH_EVENTS.invalidRefreshToken);
          }
          //  else if (rejection.status == 400) {
          //     $rootScope.$broadcast(AUTH_EVENTS.refresh-token-failure);
          // }
          
          return $q.reject(rejection);
        }
    }


  })();



  //inject interceptor to $http
  (function() {
    angular
      .module("core")
      .config(config);

    config.$inject = ['$httpProvider'];

    function config($httpProvider) {
      $httpProvider.interceptors.push('unAuthenticatedInterceptor');
    }
  })();

})();
;(function() {
  'use strict';
  (function() {
    angular
      .module('core')
      .factory('useTokenInterceptor', useTokenInterceptor);

    useTokenInterceptor.$inject = ['authenticationService','$localStorage'];


    function useTokenInterceptor(authenticationService,$localStorage) {
      var tokenInterceptor = {
        request: requestInterceptor
      };
      return tokenInterceptor;

      function requestInterceptor(config) {
          if (config.useToken) {
            return authenticationService.getToken()
              .then(function(data){
                config.headers['Authorization'] = data['token_type'] + " " + data['access_token'];
				if(config.params== null || config.params.lang ==null)
					config.headers['Accept-Language'] = $localStorage.language;//"en";
				else
					config.headers['Accept-Language'] = config.params.lang;
                if (!config.headers.hasOwnProperty('Content-Type')) 
                {
                    config.headers['Content-Type'] = 'application/json';
                }
                return config;
              });

          }
          return config;
        }
    }


  })();



  //inject interceptor to $http
  (function() {
    angular
      .module("core")
      .config(config);

    config.$inject = ['$httpProvider'];

    function config($httpProvider) {
      $httpProvider.interceptors.push('useTokenInterceptor');
    }
  })();

})();
;(function() {
  'use strict';

  angular
    .module('core')
    .run(runBlock);

  runBlock.$inject = ['PermissionStore', 'authorizationService', 'userRolesEnum'];

  function runBlock(PermissionStore, authorizationService, userRolesEnum) {
    PermissionStore
      .definePermission('GlobalAdmin', function () {
          return authorizationService.hasRole(String(userRolesEnum.GlobalAdmin));
      });
  }

}());
;(function() {
    'use strict';
  
    angular
      .module('core')
      .run(runBlock);
  
    runBlock.$inject = ['PermissionStore', 'authorizationService', 'userRolesEnum'];
  
    function runBlock(PermissionStore, authorizationService, userRolesEnum) {
      PermissionStore
        .definePermission('RestaurantAdmin', function () {
            return authorizationService.hasRole(String(userRolesEnum.RestaurantAdmin));
        });
    }
  
  }());
  ;(function() {
  'use strict';

  angular
    .module('core')
    .run(runBlock);

  runBlock.$inject = ['PermissionStore','authorizationService'];

  function runBlock (PermissionStore, authorizationService){
    PermissionStore
      .definePermission('anonymous',function(){
        return !authorizationService.isLoggedIn();
      });
  }

}());
;(function() {
  'use strict';

 
  angular
    .module('core')
    .factory('authorizationService', authorizationService);

  authorizationService.$inject = ['$rootScope', '$localStorage', 'AUTH_EVENTS'];

  function authorizationService($rootScope, $localStorage, AUTH_EVENTS) {
    var factory = {
      getAuthInfo: getAuthInfo,
      getUser: getUser,
      hasRole: hasRole,
      isLoggedIn: isLoggedIn,
      logout: logout,
      setAuthInfo: setAuthInfo,
      isDisabled: false,
      isPasswordchanged:false
    };

    return factory;

   
    function isLoggedIn() {
      return !!$localStorage.authInfo;
    }

    
    function getAuthInfo() {
      return $localStorage.authInfo;
    }

    
    function getUser() {
      var info = getAuthInfo();
      return {
        email: info? info.Username : "",
        name: info? info.Name : "",
        role: info ? info.Role : "",
        id: info ? info.UserId : ""
      };
    }

   
    function hasRole(role) {
      if (!isLoggedIn()) {
        return false;
      }
      // return JSON.parse(getAuthInfo().Roles).indexOf(role) > -1;
      return getAuthInfo().Role == role;
    }
	
    function logout() {
      $localStorage.authInfo = undefined;
      $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
    }

    function setAuthInfo(info) {
      $localStorage.authInfo = info.data;
      var currentDate = new Date();
      $localStorage.authInfo['expires_in'] = currentDate.setSeconds(currentDate.getSeconds() + $localStorage.authInfo['expires_in']);
    }
  }

}());
