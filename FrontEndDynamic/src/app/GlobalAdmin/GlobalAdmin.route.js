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
