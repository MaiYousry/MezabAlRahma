(function() {
    'use strict';

    angular
        .module('home')
        .config(function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('homes', {
					url: '/homes',
                    templateUrl: './app/GlobalAdmin/home/templates/home.html',
                    controller: 'homeController',
                    'controllerAs': 'homeCtrl',
                    data: {
                        permissions: {
                            only: ['GlobalAdmin'],
                           redirectTo: 'root'
                        }
                    },
                    resolve: {
                        homePagingPrepService: homePagingPrepService,
                        templatePrepService: templatePrepService,
                        currencyPrepService: currencyPrepService
                    }
                 
                })

                $stateProvider
                .state('aboutUses', {
					url: '/aboutUses',
                    templateUrl: './app/GlobalAdmin/aboutUs/templates/aboutUs.html',
                    controller: 'aboutUsController',
                    'controllerAs': 'aboutUsCtrl',
                    data: {
                        permissions: {
                            only: ['GlobalAdmin'],
                           redirectTo: 'root'
                        }
                    },
                    resolve: {
                        aboutUsPagingPrepService: aboutUsPagingPrepService,
                        templatePrepService: templatePrepService
                    }
                 
                })

                .state('templates', {
                    url: '/templates',
                    templateUrl: './app/GlobalAdmin/template/templates/template.html',
                    controller: 'templateController',
                    'controllerAs': 'templateCtrl',
                    data: {
                        permissions: {
                            only: ['GlobalAdmin'],
                            redirectTo: 'root'
                        }
                    },
                    resolve: {
                        //templatePrepService: templatePrepService,
                        templatePagingPrepService: templatePagingPrepService
                    }
            
                })

                .state('currencies', {
                    url: '/currencies',
                    templateUrl: './app/GlobalAdmin/currency/templates/currency.html',
                    controller: 'currencyController',
                    'controllerAs': 'currencyCtrl',
                    data: {
                        permissions: {
                            only: ['GlobalAdmin'],
                            redirectTo: 'root'
                        }
                    },
                    resolve: {
                        currencyPagingPrepService: currencyPagingPrepService
                    }
            
                })

                .state('offers', {
					url: '/offers',
                    templateUrl: './app/GlobalAdmin/offer/templates/offer.html',
                    controller: 'offerController',
                    'controllerAs': 'offerCtrl',
                    data: {
                        permissions: {
                            only: ['GlobalAdmin'],
                           redirectTo: 'root'
                        }
                    },
                    resolve: {
                        offerPagingPrepService: offerPagingPrepService,
                        templatePrepService: templatePrepService,
                        currencyPrepService: currencyPrepService
                    }
                 
                })

                .state('ourTeams', {
					url: '/ourTeams',
                    templateUrl: './app/GlobalAdmin/ourTeam/templates/ourTeam.html',
                    controller: 'ourTeamController',
                    'controllerAs': 'ourTeamCtrl',
                    data: {
                        permissions: {
                            only: ['GlobalAdmin'],
                           redirectTo: 'root'
                        }
                    },
                    resolve: {
                        ourTeamPagingPrepService: ourTeamPagingPrepService,
                        templatePrepService: templatePrepService,
                    }
                 
                })

                .state('hotels', {
					url: '/hotels',
                    templateUrl: './app/GlobalAdmin/hotel/templates/hotel.html',
                    controller: 'hotelController',
                    'controllerAs': 'hotelCtrl',
                    data: {
                        permissions: {
                            only: ['GlobalAdmin'],
                           redirectTo: 'root'
                        }
                    },
                    resolve: {
                        hotelPagingPrepService: hotelPagingPrepService,
                        templatePrepService: templatePrepService,
                        currencyPrepService: currencyPrepService
                    }
                 
                })

                .state('contactUs', {
					url: '/contactUs',
                    templateUrl: './app/GlobalAdmin/contactUs/templates/contactUs.html',
                    controller: 'contactUsController',
                    'controllerAs': 'contactUsCtrl',
                    data: {
                        permissions: {
                            only: ['GlobalAdmin'],
                           redirectTo: 'root'
                        }
                    },
                    resolve: {
                        contactUsPrepService: contactUsPrepService,
                    }
                 
                })
       
        });

        contactUsPrepService.$inject = ['ContactUsResource']
        
        function contactUsPrepService(ContactUsResource) {
            return ContactUsResource.getContactUs().$promise;
        }

        aboutUsPagingPrepService.$inject = ['AboutUsPagingResource']
        
        function aboutUsPagingPrepService(AboutUsPagingResource) {
            return AboutUsPagingResource.getAllPagingAboutUses().$promise;
        }

        homePagingPrepService.$inject = ['HomePagingResource']
        
        function homePagingPrepService(HomePagingResource) {
            return HomePagingResource.getAllPagingHomes().$promise;
        }

        offerPagingPrepService.$inject = ['OfferPagingResource']
        
        function offerPagingPrepService(OfferPagingResource) {
            return OfferPagingResource.getAllPagingOffers().$promise;
        }

        hotelPagingPrepService.$inject = ['HotelPagingResource']
        
        function hotelPagingPrepService(HotelPagingResource) {
            return HotelPagingResource.getAllPagingHotels().$promise;
        }

        ourTeamPagingPrepService.$inject = ['OurTeamPagingResource']
        
        function ourTeamPagingPrepService(OurTeamPagingResource) {
            return OurTeamPagingResource.getAllPagingOurTeams().$promise;
        }

        templatePrepService.$inject = ['TemplateResource']
        
        function templatePrepService(TemplateResource) {
            return TemplateResource.getAllTemplates().$promise;
        }

        templatePagingPrepService.$inject = ['TemplatePagingResource']
        
        function templatePagingPrepService(TemplatePagingResource) {
            return TemplatePagingResource.getAllPagingTemplates().$promise;
        }

        currencyPagingPrepService.$inject = ['CurrencyPagingResource']
        
        function currencyPagingPrepService(CurrencyPagingResource) {
            return CurrencyPagingResource.getAllPagingCurrencies().$promise;
        }

        currencyPrepService.$inject = ['CurrencyResource']
        
        function currencyPrepService(CurrencyResource) {
            return CurrencyResource.getAllCurrencies().$promise;
        }


}());
