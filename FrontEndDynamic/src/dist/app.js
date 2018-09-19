(function() {
    'use strict';

    angular
        .module('home')
        .config(function($stateProvider, $urlRouterProvider) {

            $stateProvider
              .state('aboutUs', {
					url: '/aboutUs',
                    templateUrl: './app/GlobalAdmin/user/templates/about-us.html',
                    controller: 'aboutUsController',
                    'controllerAs': 'aboutUsCtrl',
                    resolve:{
                        aboutUsPrepService:aboutUsPrepService,
                        contactUsPrepService:contactUsPrepService,
                        homePrepService:homePrepService
                    }


                                                  })

                .state('contactUs', {
					url: '/contactUs',
                    templateUrl: './app/GlobalAdmin/user/templates/contact-us.html',
                    controller: 'contactUsController',
                    'controllerAs': 'contactUsCtrl',
                    resolve:{
                        contactUsPrepService:contactUsPrepService,
                        homePrepService:homePrepService
                    }
                })

                .state('home', {
					url: '/home',
                    templateUrl: './app/GlobalAdmin/user/templates/home.html',
                    controller: 'homeController',
                    'controllerAs': 'homeCtrl',
                    resolve:{
                        homePrepService:homePrepService,
                        contactUsPrepService:contactUsPrepService,
                        homePrepService:homePrepService
                    }
                })

                .state('leadership', {
					url: '/leadership',
                    templateUrl: './app/GlobalAdmin/user/templates/leadership.html',
                    controller: 'leadershipController',
                    'controllerAs': 'leadershipCtrl',
                    resolve:{
                        leadershipPrepService:leadershipPrepService,
                        contactUsPrepService:contactUsPrepService,
                        homePrepService:homePrepService
                    }
                })
        });



               aboutUsPrepService.$inject = ['AboutUsResource']

                function aboutUsPrepService(AboutUsResource) {
            return AboutUsResource.getAboutUs().$promise;
        }

        contactUsPrepService.$inject = ['ContactUsResource']

                function contactUsPrepService(ContactUsResource) {
            return ContactUsResource.getContactUs().$promise;
        }

        homePrepService.$inject = ['HomeResource']

                function homePrepService(HomeResource) {
            return HomeResource.getHome().$promise;
        }

        leadershipPrepService.$inject = ['LeadershipResource']

                function leadershipPrepService(LeadershipResource) {
            return LeadershipResource.getLeadership().$promise;
        }

}());
(function() {
    'use strict';

      angular
      .module('home')
      .config(config)
      .run(runBlock);

      config.$inject = ['ngProgressLiteProvider'];
    runBlock.$inject = ['$rootScope', 'ngProgressLite' ];

      function config(ngProgressLiteProvider) {
      ngProgressLiteProvider.settings.speed = 1000;

      }

      function runBlock($rootScope, ngProgressLite ) {

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
          startProgress();
      });
      var routingDoneEvents = ['$stateChangeSuccess', '$stateChangeError', '$stateNotFound'];

        angular.forEach(routingDoneEvents, function(event) {
        $rootScope.$on(event, function(event, toState, toParams, fromState, fromParams) {
          endProgress();
        });
      });

        function startProgress() {
        ngProgressLite.start();
      }

        function endProgress() {
        ngProgressLite.done();
      }

      }
  })();
  (function () {
    'use strict';

	    angular
        .module('home')
        .controller('aboutUsController', ['$scope', 'homePrepService','$stateParams','$translate', 'appCONSTANTS','ToastService', 'aboutUsPrepService', 'contactUsPrepService',  aboutUsController])

    function aboutUsController($scope, homePrepService,$stateParams ,$translate , appCONSTANTS, ToastService, aboutUsPrepService, contactUsPrepService){

                $scope.aboutUs = aboutUsPrepService;
        $scope.contactUs = contactUsPrepService;
        $scope.home = homePrepService;


	}

	}
());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('contactUsController', ['$scope', 'homePrepService', '$stateParams', '$sce','$translate', 'appCONSTANTS', 'contactUsPrepService',  contactUsController])

    function contactUsController($scope, homePrepService, $stateParams, $sce,$translate , appCONSTANTS, contactUsPrepService){

                $scope.contactUs = contactUsPrepService;
        $scope.hotelLocationUrl = $sce.trustAsResourceUrl($scope.contactUs.location);
        $scope.home = homePrepService;
	}

	}
());
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
(function() {
    angular
      .module('home')
      .factory('AboutUsResource', ['$resource', 'appCONSTANTS', AboutUsResource])
      .factory('ContactUsResource', ['$resource', 'appCONSTANTS', ContactUsResource])
      .factory('HomeResource', ['$resource', 'appCONSTANTS', HomeResource])
      .factory('LeadershipResource', ['$resource', 'appCONSTANTS', LeadershipResource])
     ;

      function AboutUsResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'AboutUs', {}, { 
        getAboutUs: { method: 'GET',useToken: true}
      })
    }

        function ContactUsResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'ContactUs', {}, { 
        getContactUs: { method: 'GET',useToken: true}
      })
    }

    function HomeResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Home', {}, { 
        getHome: { method: 'GET',useToken: true}
      })
    }

    function LeadershipResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'OurTeams', {}, { 
        getLeadership: { method: 'GET',useToken: true, isArray:true}
      })
    }

        }());

