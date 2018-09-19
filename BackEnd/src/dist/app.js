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
        .controller('aboutUsController', ['$rootScope', '$http', '$scope', '$filter', 'templatePrepService', 'CurrencyResource','AboutUsPagingResource', 'TemplatePagingResource', 'aboutUsPagingPrepService', 'DeleteAboutUsResource', '$translate', '$uibModal', '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', aboutUsController]);


    function aboutUsController($rootScope, $http, $scope, $filter, templatePrepService, CurrencyResource, AboutUsPagingResource, TemplatePagingResource, aboutUsPagingPrepService, DeleteAboutUsResource, $translate, $uibModal, $state, $localStorage, authorizationService, appCONSTANTS, ToastService) {
        var vm = this;

        $scope.flag = 0;
        $scope.flag = aboutUsPagingPrepService.results.length;
        $scope.Rate=0;

             $scope.aboutUsList = aboutUsPagingPrepService;
         $scope.templateList = templatePrepService;
         $scope.language = appCONSTANTS.supportedLanguage;

                 function refreshAboutUses(){
			var k = AboutUsPagingResource.getAllPagingAboutUses({page:vm.currentPage}).$promise.then(function(results) {
				$scope.aboutUsList = results;
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
            });
        }

        vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshAboutUses();
		}

                function confirmationDelete(aboutUsId){
			DeleteAboutUsResource.deleteAboutUs({aboutUsId:aboutUsId}).$promise.then(function(results) {
                ToastService.show("right","bottom","fadeInUp",$translate.instant('DeleteSuccess'),"success");
                vm.currentPage = 1;
				refreshAboutUses();
            },

                        function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

        vm.UpdateAboutUs = function (aboutUs) {
            TemplatePagingResource.getAllPagingTemplates().$promise.then(function(results) {
                CurrencyResource.getAllCurrencies().$promise.then(function(resultsCurrencies) {
                    $uibModal.open({
                        templateUrl: './app/GlobalAdmin/aboutUs/templates/editAboutUs.html',
                        controller: 'updateAboutUsController',
                        controllerAs: 'updateAboutUsCtrl',
                        resolve:{
                            templatePrepService: function(){return results;},
                            currencyPrepService: function(){return resultsCurrencies;},
                            callBackFunction: function(){return refreshAboutUses;},
                            selectedLanguage: function(){return $scope.selectedLanguage},
                            AboutUs: function(){return aboutUs}
                        }

                            });
                },
                function(data, status) {
                    ToastService.show("right","bottom","fadeInUp",data.message,"error");
                });
            },
            function(data, status) {
                ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

                vm.AddAboutUs = function () {
            TemplatePagingResource.getAllPagingTemplates().$promise.then(function(results) {
                CurrencyResource.getAllCurrencies().$promise.then(function(resultsCurrencies) {
                    $uibModal.open({
                        templateUrl: './app/GlobalAdmin/aboutUs/templates/addAboutUs.html',
                        controller: 'addAboutUsController',
                        controllerAs: 'addAboutUsCtrl',
                        resolve:{
                            templatePrepService: function(){return results;},
                            currencyPrepService: function(){return resultsCurrencies;},
                            callBackFunction: function(){return refreshAboutUses;},
                            selectedLanguage: function(){return $scope.selectedLanguage}
                        }

                            });
                },
                function(data, status) {
                    ToastService.show("right","bottom","fadeInUp",data.message,"error");
                });
            },
            function(data, status) {
                ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });

                  }

        vm.DeleteTemplate = function(aboutUsId){			
			var modalContent = $uibModal.open({
				templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
				controller: 'confirmDeleteDialogController',
				controllerAs: 'deleteDlCtrl',
				resolve: {
                    itemId: function() { return aboutUsId },
                    itemName: function() { return null },
                    message: function() { return null },
					callBackFunction:function() { return confirmationDelete; }
				}

							});
		}
    }


    }());(function() {
    angular
      .module('home')
      .factory('AboutUsPagingResource', ['$resource', 'appCONSTANTS', AboutUsPagingResource])
      .factory('DeleteAboutUsResource', ['$resource', 'appCONSTANTS', DeleteAboutUsResource])
      .factory('AddAboutUsResource', ['$resource', 'appCONSTANTS', AddAboutUsResource])
      .factory('UpdateAboutUsResource', ['$resource', 'appCONSTANTS', UpdateAboutUsResource])
   ;


      function AboutUsPagingResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'AboutUsesPaging', {}, {
        getAllPagingAboutUses: { method: 'GET', useToken: true} 
      })
    }

    function DeleteAboutUsResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'AboutUses/:aboutUsId', {}, {
        deleteAboutUs: { method: 'DELETE', useToken: true} 
      })
    }

    function AddAboutUsResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'AboutUses/', {}, { 
          addAboutUs: { method: 'POST',useToken: true}
      })
  }

  function UpdateAboutUsResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'AboutUses', {}, {
        updateAboutUs: { method: 'PUT', useToken: true} 
      })
  }

        }());

  (function () {
    'use strict';

    angular
        .module('home')
        .controller('addAboutUsController', ['$rootScope', '$scope', '$filter','callBackFunction', 'selectedLanguage', '$translate', '$uibModal','$uibModalInstance', '$state', '$localStorage', 'authorizationService', 'templatePrepService', 'TemplatePagingResource', 'appCONSTANTS', 'ToastService', 'AddAboutUsResource', addAboutUsController]);


    function addAboutUsController($rootScope, $scope, $filter,callBackFunction, selectedLanguage, $translate, $uibModal, $uibModalInstance, $state, $localStorage, authorizationService, templatePrepService, TemplatePagingResource,appCONSTANTS, ToastService, AddAboutUsResource) {
        var vm = this;
        $scope.templateList = templatePrepService;
        $scope.templateId="0";
        $scope.template;
        vm.DescriptionDictionary;
        vm.HeaderDictionary;
        vm.TitleColoredDictionary;
        vm.SubTitleDictionary;
        vm.BoldArticleDictionary;
        $scope.language = appCONSTANTS.supportedLanguage;
        $scope.selectedLanguage = selectedLanguage;

        $scope.changeId=function (val){
            $scope.templateId=val;
        }

                function refreshTemplates(){
			var k = TemplatePagingResource.getAllPagingTemplates({page:vm.currentPage}).$promise.then(function(results) {
				$scope.templateList = results
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

		vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshTemplates();
        }

        vm.close = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
		}

        $scope.AddNewAboutUs = function () {
            var newAboutUs = new AddAboutUsResource();

            newAboutUs.TemplateId = $scope.templateId;
             newAboutUs.TitleDictionary = vm.TitleDictionary;
            newAboutUs.DescriptionDictionary = vm.DescriptionDictionary;
            newAboutUs.SubTitleDictionary = vm.SubTitleDictionary;
            newAboutUs.TitleColoredDictionary = vm.TitleColoredDictionary;
            newAboutUs.BoldArticleDictionary = vm.BoldArticleDictionary;

                  newAboutUs.$addAboutUs().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddSuccess'), "success");
                    callBackFunction();
                    $uibModalInstance.dismiss('cancel');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

    }

}());(function () {
    'use strict';

    angular
        .module('home')
        .controller('updateAboutUsController', ['$rootScope', '$scope','$uibModalInstance', 'UpdateAboutUsResource', 'templatePrepService','callBackFunction', '$filter', '$translate', '$uibModal', '$state', 'selectedLanguage', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService','AboutUs', updateAboutUsController]);


    function updateAboutUsController($rootScope, $scope, $uibModalInstance, UpdateAboutUsResource,templatePrepService,callBackFunction, $filter, $translate, $uibModal, $state , selectedLanguage, $localStorage, authorizationService, appCONSTANTS,ToastService, AboutUs) {
        var vm = this;
        $scope.aboutUsObj = AboutUs;
        $scope.templateList = templatePrepService;
        $scope.language = appCONSTANTS.supportedLanguage;
        $scope.selectedLanguage = selectedLanguage;



        vm.close = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
        }

        vm.backdrop = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
        }

        $scope.changeId=function (val){
            $scope.templateId=val;
        }

        $scope.UpdateAboutUs = function () {
            var newAboutUs = new UpdateAboutUsResource();

                      newAboutUs.AboutUsId =$scope.aboutUsObj.aboutUsId;

                       if($scope.templateId == undefined){
                newAboutUs.TemplateId = $scope.aboutUsObj.templateId;
            }
            else{
                newAboutUs.TemplateId = $scope.templateId;
            }
            newAboutUs.TitleDictionary = $scope.aboutUsObj.titleDictionary;
            newAboutUs.SubTitleDictionary = $scope.aboutUsObj.subTitleDictionary;
            newAboutUs.TitleColoredDictionary = $scope.aboutUsObj.titleColoredDictionary;
            newAboutUs.DescriptionDictionary = $scope.aboutUsObj.descriptionDictionary;
            newAboutUs.BoldArticleDictionary = $scope.aboutUsObj.boldArticleDictionary;
            newAboutUs.$updateAboutUs().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('EditSuccess'), "success");
                    $uibModalInstance.dismiss('cancel');
                    callBackFunction();

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

     }

})();


(function () {
    'use strict';

    angular
        .module('home')
        .controller('addContactUsController', ['$rootScope', '$scope', '$filter', '$window', 'AddContactUsResource','ContactUsResource', '$translate', '$uibModal','$uibModalInstance', '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', addContactUsController]);


    function addContactUsController($rootScope, $scope, $filter, $window, AddContactUsResource, ContactUsResource, $translate, $uibModal, $uibModalInstance, $state, $localStorage, authorizationService, appCONSTANTS, ToastService) {
        var vm = this;
        $scope.contactUsObj;

                debugger;
        function refreshContactUs(){
			var k = ContactUsResource.getContactUs().$promise.then(function(results) {
				$scope.contactUsObj = results;
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

        vm.close = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
		}

            $scope.AddNewContactUs = function () {
            var newContactUs = new AddContactUsResource();
            newContactUs.Email = $scope.Email;
            newContactUs.CompanyNumber = $scope.MobileNum;
            newContactUs.WhatsAppNumber = $scope.WhatsAppNum;
            newContactUs.Location = $scope.Location;
            newContactUs.ShowEmail = $scope.ShowEmail;
            newContactUs.ShowMobile = $scope.ShowMobile;
            newContactUs.ShowFacebook = $scope.ShowFacebook;
            newContactUs.ShowGmail = $scope.ShowGmail;
            newContactUs.ShowTwitter = $scope.ShowTwitter;
            newContactUs.ShowOwnerEmail = $scope.ShowOwnerEmail;
            newContactUs.ShowWhatsApp = $scope.ShowWhatsApp;
            newContactUs.FacebookLink = $scope.FacebookLink;
            newContactUs.GmailLink = $scope.GmailLink;
            newContactUs.TwitterLink = $scope.TwitterLink;

            newContactUs.$addContactUs().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddSuccess'), "success");
                    $window.location.reload();
                    $uibModalInstance.dismiss('cancel');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

    }

}());(function () {
    'use strict';

    angular
        .module('home')
        .controller('contactUsController', ['$rootScope', '$http', '$scope', '$filter', 'ContactUsResource', 'contactUsPrepService', '$translate', '$uibModal', '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', contactUsController]);


    function contactUsController($rootScope, $http, $scope, $filter, ContactUsResource, contactUsPrepService, $translate, $uibModal, $state, $localStorage, authorizationService, appCONSTANTS, ToastService) {
        var vm = this;

             $scope.contactUsObj = contactUsPrepService;

        $scope.flag = 0;
        $scope.flag = $scope.contactUsObj.contactUsId;

                 function refreshContactUs(){
			var k = ContactUsResource.getContactUs().$promise.then(function(results) {
				$scope.contactUsObj = results;
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

        vm.UpdateContactUs = function (contactUs) {
            $uibModal.open({
                templateUrl: './app/GlobalAdmin/contactUs/templates/editContactUs.html',
                controller: 'editContactUsController',
                controllerAs: 'editContactUsCtrl',
                resolve:{
                    ContactUs: function(){return contactUs}
                }
            });
        }

                vm.AddContactUs = function () {
            $uibModal.open({
                templateUrl: './app/GlobalAdmin/contactUs/templates/addContactUs.html',
                controller: 'addContactUsController',
                controllerAs: 'addContactUsCtrl'

            });

                  }
    }


    }());(function() {
    angular
      .module('home')
      .factory('ContactUsResource', ['$resource', 'appCONSTANTS', ContactUsResource])
      .factory('AddContactUsResource', ['$resource', 'appCONSTANTS', AddContactUsResource])
      .factory('UpdateContactUsResource', ['$resource', 'appCONSTANTS', UpdateContactUsResource])
   ;

      function ContactUsResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'ContactUss', {}, {
          getContactUs: { method: 'GET', useToken: true} 
        })
    }

        function AddContactUsResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'ContactUss/', {}, { 
            addContactUs: { method: 'POST',useToken: true}
        })
    }

    function UpdateContactUsResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'ContactUss', {}, {
          updateContactUs: { method: 'PUT', useToken: true} 
        })
    }

  }());

  (function () {
    'use strict';

    angular
        .module('home')
        .controller('editContactUsController', ['$rootScope', '$scope', '$window','$uibModalInstance', '$filter', '$translate', '$uibModal', '$state', 'UpdateContactUsResource', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService','ContactUs', editContactUsController]);


    function editContactUsController($rootScope, $scope, $window, $uibModalInstance, $filter, $translate, $uibModal, $state, UpdateContactUsResource, $localStorage, authorizationService, appCONSTANTS,ToastService, ContactUs) {
        var vm = this;

        vm.contactUsObj = ContactUs;
        $scope.LocationDetails = "To get the location url.<br/> 1st: Go to google map.<br/> 2nd: set your target location.<br/> 3rd: click share.<br/> 4th: click (Embed a map) tab.<br/> 5th: Copy the source url (src) and add here."

        vm.close = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
        }

        vm.backdrop = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
        }

                $scope.UpdateContactUs = function () {
            var newContactUs = new UpdateContactUsResource();

                        newContactUs.ContactUsId = vm.contactUsObj.contactUsId;           
            newContactUs.Email = vm.contactUsObj.email;           
            newContactUs.OwnerEmail = vm.contactUsObj.ownerEmail;           
            newContactUs.CompanyNumber = vm.contactUsObj.companyNumber;           
            newContactUs.WhatsAppNumber = vm.contactUsObj.whatsAppNumber;           
            newContactUs.Location = vm.contactUsObj.location;     
            newContactUs.ShowEmail = vm.contactUsObj.showEmail;
            newContactUs.ShowMobile = vm.contactUsObj.showMobile;
            newContactUs.ShowFacebook = vm.contactUsObj.showFacebook;
            newContactUs.ShowGmail = vm.contactUsObj.showGmail;
            newContactUs.ShowTwitter = vm.contactUsObj.showTwitter;
            newContactUs.ShowOwnerEmail = vm.contactUsObj.showOwnerEmail;
            newContactUs.ShowWhatsApp = vm.contactUsObj.showWhatsApp;
            newContactUs.FacebookLink = vm.contactUsObj.facebookLink;
            newContactUs.GmailLink = vm.contactUsObj.gmailLink;
            newContactUs.TwitterLink = vm.contactUsObj.twitterLink;      

                       newContactUs.$updateContactUs().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('EditSuccess'), "success");
                    $uibModalInstance.dismiss('cancel');
                    $window.location.reload();
                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

     }

})();


(function () {
    'use strict';

    angular
        .module('home')
        .controller('addCurrencyController', ['$rootScope', '$scope', '$filter', 'AddCurrencyResource','CurrencyPagingResource', 'callBackFunction', '$translate', '$uibModal','$uibModalInstance', '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', addCurrencyController]);


    function addCurrencyController($rootScope, $scope, $filter, AddCurrencyResource, CurrencyPagingResource, callBackFunction, $translate, $uibModal, $uibModalInstance, $state, $localStorage, authorizationService, appCONSTANTS, ToastService) {
        var vm = this;
        $scope.currencyList;
        vm.titleDictionary;
        $scope.getId="0";
        $scope.language = appCONSTANTS.supportedLanguage;
        $scope.changeId=function (val){
            $scope.getId=val;
        }

                function refreshCurrencies(){
			var k = CurrencyPagingResource.getAllPagingCurrencies({page:vm.currentPage}).$promise.then(function(results) {
				$scope.currencyList = results;
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

		vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshCurrencies();
        }

        vm.close = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
		}

            $scope.AddNewCurrency = function () {
            var newCurrency = new AddCurrencyResource();
            newCurrency.TitleDictionary = vm.titleDictionary;

            newCurrency.$addCurrency().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddSuccess'), "success");
                    callBackFunction();
                    $uibModalInstance.dismiss('cancel');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }




    }

}());(function () {
    'use strict';

    angular
        .module('home')
        .controller('currencyController', ['$rootScope', '$http', '$scope', '$filter', 'CurrencyPagingResource', 'DeleteCurrencyResource', 'currencyPagingPrepService', '$translate', '$uibModal', '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', currencyController]);


    function currencyController($rootScope, $http, $scope, $filter, CurrencyPagingResource, DeleteCurrencyResource, currencyPagingPrepService, $translate, $uibModal, $state, $localStorage, authorizationService, appCONSTANTS, ToastService) {
        var vm = this;

             $scope.currencyList = currencyPagingPrepService;

                 function refreshCurrencies(){
			var k = CurrencyPagingResource.getAllPagingCurrencies({page:vm.currentPage}).$promise.then(function(results) {
				$scope.currencyList = results;
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

        vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshCurrencies();
		}

                function confirmationDelete(currencyId){
			DeleteCurrencyResource.deleteCurrency({currencyId:currencyId}).$promise.then(function(results) {
                ToastService.show("right","bottom","fadeInUp",$translate.instant('DeleteSuccess'),"success");
                vm.currentPage = 1;
				refreshCurrencies();
            },

                        function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

        vm.UpdateCurrency = function (currency) {
            $uibModal.open({
                templateUrl: './app/GlobalAdmin/currency/templates/editCurrency.html',
                controller: 'editCurrencyController',
                controllerAs: 'editCurrencyCtrl',
                resolve:{
                    Currency: function(){return currency},
                    callBackFunction:function(){return refreshCurrencies;}
                }
            });
        }

                vm.AddCurrency = function () {
            $uibModal.open({
                templateUrl: './app/GlobalAdmin/currency/templates/addCurrency.html',
                controller: 'addCurrencyController',
                controllerAs: 'addCurrencyCtrl',
                resolve:{
                    callBackFunction: function(){return refreshCurrencies;}
                }

            });

                  }

        vm.DeleteCurrency = function(currencyId){			
			var modalContent = $uibModal.open({
				templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
				controller: 'confirmDeleteDialogController',
				controllerAs: 'deleteDlCtrl',
				resolve: {
                    itemId: function() { return currencyId },
                    itemName: function() { return null },
                    message: function() { return null }, 
					callBackFunction:function() { return confirmationDelete; }
				}

							});
        }
    }


    }());(function() {
    angular
      .module('home')
      .factory('CurrencyPagingResource', ['$resource', 'appCONSTANTS', CurrencyPagingResource])
      .factory('CurrencyResource', ['$resource', 'appCONSTANTS', CurrencyResource])
      .factory('AddCurrencyResource', ['$resource', 'appCONSTANTS', AddCurrencyResource])
      .factory('DeleteCurrencyResource', ['$resource', 'appCONSTANTS', DeleteCurrencyResource])
      .factory('UpdateCurrencyResource', ['$resource', 'appCONSTANTS', UpdateCurrencyResource])
   ;


      function CurrencyPagingResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'CurrenciesPaging', {}, {
        getAllPagingCurrencies: { method: 'GET', useToken: true} 
      })
    }

    function CurrencyResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Currencies', {}, {
          getAllCurrencies: { method: 'GET', useToken: true,  isArray:true} 
        })
    }

          function DeleteCurrencyResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Currencies/:currencyId', {}, {
          deleteCurrency: { method: 'DELETE', useToken: true} 
        })
    }

    function AddCurrencyResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Currencies/', {}, { 
            addCurrency: { method: 'POST',useToken: true}
        })
    }

    function UpdateCurrencyResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Currencies', {}, {
          updateCurrency: { method: 'PUT', useToken: true} 
        })
    }

  }());

  (function () {
    'use strict';

    angular
        .module('home')
        .controller('editCurrencyController', ['$rootScope', '$scope','$uibModalInstance','callBackFunction', '$filter', '$translate', '$uibModal', '$state', 'UpdateCurrencyResource', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService','Currency', editCurrencyController]);


    function editCurrencyController($rootScope, $scope, $uibModalInstance,callBackFunction, $filter, $translate, $uibModal, $state, UpdateCurrencyResource, $localStorage, authorizationService, appCONSTANTS,ToastService, Currency) {
        var vm = this;
        $scope.language = appCONSTANTS.supportedLanguage;

        vm.currencyObj = Currency;

        vm.close = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
        }

        vm.backdrop = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
        }

                $scope.UpdateContact = function () {
            var newCurrency = new UpdateCurrencyResource();
            newCurrency.TitleDictionary = vm.currencyObj.titleDictionary;
            newCurrency.CurrencyId = vm.currencyObj.currencyId;           

                       newCurrency.$updateCurrency().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('EditSuccess'), "success");
                    $uibModalInstance.dismiss('cancel');
                    callBackFunction();

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

     }

})();


(function () {
    'use strict';

    angular
        .module('home')
        .controller('addHomeController', ['$rootScope', '$scope', '$filter', 'currencyPrepService','callBackFunction', 'selectedLanguage', '$translate', '$uibModal','$uibModalInstance', '$state', '$localStorage', 'authorizationService', 'templatePrepService', 'TemplatePagingResource', 'appCONSTANTS', 'ToastService', 'AddHomeResource', addHomeController]);


    function addHomeController($rootScope, $scope, $filter, currencyPrepService,callBackFunction, selectedLanguage, $translate, $uibModal, $uibModalInstance, $state, $localStorage, authorizationService, templatePrepService, TemplatePagingResource,appCONSTANTS, ToastService, AddHomeResource) {
        var vm = this;
        $scope.templateList = templatePrepService;
        $scope.currencyList = currencyPrepService;
        $scope.templateId="0";
        $scope.Rate = 0;
        $scope.CurrencyTypeId = 0;
        $scope.template;
        $scope.Price;
        $scope.IsMain = false;
        vm.TitleDictionary;
        vm.DescriptionDictionary;
        vm.SubTitleDictionary;
        vm.ColoredTitleDictionary;
        $scope.language = appCONSTANTS.supportedLanguage;
        $scope.selectedLanguage = selectedLanguage;

        $scope.changeId=function (val){
            $scope.templateId=val;
        }

                function refreshTemplates(){
			var k = TemplatePagingResource.getAllPagingTemplates({page:vm.currentPage}).$promise.then(function(results) {
				$scope.templateList = results
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

		vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshTemplates();
        }

        vm.close = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
		}

        $scope.AddNewHome = function () {
            var newHome = new AddHomeResource();

            newHome.Rate =  $scope.Rate;

                        newHome.TemplateId = $scope.templateId;
            newHome.Price = $scope.Price;
            newHome.IsMain = $scope.IsMain;
            newHome.TitleDictionary = vm.TitleDictionary;
            newHome.DescriptionDictionary = vm.DescriptionDictionary;
            newHome.SubTitleDictionary = vm.SubTitleDictionary;
            newHome.ColoredTitleDictionary = vm.ColoredTitleDictionary;

                  newHome.$addHome().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddSuccess'), "success");
                    callBackFunction();
                    $uibModalInstance.dismiss('cancel');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

    }

}());(function () {
    'use strict';

    angular
        .module('home')
        .controller('updateHomeController', ['$rootScope', '$scope','$uibModalInstance', 'UpdateHomeResource', 'templatePrepService','callBackFunction', '$filter', '$translate', '$uibModal', '$state', 'currencyPrepService', 'selectedLanguage', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService','Home', updateHomeController]);


    function updateHomeController($rootScope, $scope, $uibModalInstance, UpdateHomeResource,templatePrepService,callBackFunction, $filter, $translate, $uibModal, $state , currencyPrepService, selectedLanguage, $localStorage, authorizationService, appCONSTANTS,ToastService, Home) {
        var vm = this;
        $scope.homeObj = Home;
        $scope.templateList = templatePrepService;
        $scope.currencyList = currencyPrepService;
        $scope.language = appCONSTANTS.supportedLanguage;
        $scope.selectedLanguage = selectedLanguage;



        vm.close = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
        }

        vm.backdrop = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
        }

        $scope.changeId=function (val){
            $scope.templateId=val;
        }

        $scope.UpdateHome = function () {
            var newHome = new UpdateHomeResource();
            newHome.Rate =  $scope.homeObj.rate;
            newHome.HomeId =$scope.homeObj.homeId;
            if($scope.templateId == undefined){
                newHome.TemplateId = $scope.homeObj.templateId;
            }
            else{
                newHome.TemplateId = $scope.templateId;
            }
            newHome.Price = $scope.homeObj.price;
            newHome.IsMain =$scope.homeObj.isMain;
            newHome.TitleDictionary = $scope.homeObj.titleDictionary;
            newHome.DescriptionDictionary = $scope.homeObj.descriptionDictionary;
            newHome.SubTitleDictionary = $scope.homeObj.subTitleDictionary;
            newHome.ColoredTitleDictionary = $scope.homeObj.coloredTitleDictionary;
            newHome.$updateHome().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('EditSuccess'), "success");
                    $uibModalInstance.dismiss('cancel');
                    callBackFunction();

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

     }

})();


(function () {
    'use strict';

    angular
        .module('home')
        .controller('homeController', ['$rootScope', '$http', '$scope', '$filter', 'currencyPrepService', 'templatePrepService', 'CurrencyResource','HomePagingResource', 'TemplatePagingResource', 'homePagingPrepService', 'DeleteHomeResource', '$translate', '$uibModal', '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', homeController]);


    function homeController($rootScope, $http, $scope, $filter, currencyPrepService, templatePrepService, CurrencyResource, HomePagingResource, TemplatePagingResource, homePagingPrepService, DeleteHomeResource, $translate, $uibModal, $state, $localStorage, authorizationService, appCONSTANTS, ToastService) {
        var vm = this;

             $scope.flag = 0;
        $scope.flag = homePagingPrepService.results.length;

        $scope.Rate=0;

             $scope.homeList = homePagingPrepService;
         $scope.templateList = templatePrepService;
         $scope.currencyList = currencyPrepService;
         $scope.language = appCONSTANTS.supportedLanguage;

                 function refreshHomes(){
			var k = HomePagingResource.getAllPagingHomes({page:vm.currentPage}).$promise.then(function(results) {
				$scope.homeList = results;
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

        vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshHomes();
		}

                function confirmationDelete(homeId){
			DeleteHomeResource.deleteHome({homeId:homeId}).$promise.then(function(results) {
                ToastService.show("right","bottom","fadeInUp",$translate.instant('DeleteSuccess'),"success");
                vm.currentPage = 1;
				refreshHomes();
            },

                        function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

        vm.UpdateHome = function (home) {
            TemplatePagingResource.getAllPagingTemplates().$promise.then(function(results) {
                CurrencyResource.getAllCurrencies().$promise.then(function(resultsCurrencies) {
                    $uibModal.open({
                        templateUrl: './app/GlobalAdmin/home/templates/editHome.html',
                        controller: 'updateHomeController',
                        controllerAs: 'updateHomeCtrl',
                        resolve:{
                            templatePrepService: function(){return results;},
                            currencyPrepService: function(){return resultsCurrencies;},
                            callBackFunction: function(){return refreshHomes;},
                            selectedLanguage: function(){return $scope.selectedLanguage},
                            Home: function(){return home}
                        }

                            });
                },
                function(data, status) {
                    ToastService.show("right","bottom","fadeInUp",data.message,"error");
                });
            },
            function(data, status) {
                ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

                vm.AddHome = function () {
            TemplatePagingResource.getAllPagingTemplates().$promise.then(function(results) {
                CurrencyResource.getAllCurrencies().$promise.then(function(resultsCurrencies) {
                    $uibModal.open({
                        templateUrl: './app/GlobalAdmin/home/templates/addHome.html',
                        controller: 'addHomeController',
                        controllerAs: 'addHomeCtrl',
                        resolve:{
                            templatePrepService: function(){return results;},
                            currencyPrepService: function(){return resultsCurrencies;},
                            callBackFunction: function(){return refreshHomes;},
                            selectedLanguage: function(){return $scope.selectedLanguage}
                        }

                            });
                },
                function(data, status) {
                    ToastService.show("right","bottom","fadeInUp",data.message,"error");
                });
            },
            function(data, status) {
                ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });

                  }

        vm.DeleteTemplate = function(homeId){			
			var modalContent = $uibModal.open({
				templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
				controller: 'confirmDeleteDialogController',
				controllerAs: 'deleteDlCtrl',
				resolve: {
                    itemId: function() { return homeId },
                    itemName: function() { return null },
                    message: function() { return null },
					callBackFunction:function() { return confirmationDelete; }
				}

							});
		}
    }


    }());(function() {
    angular
      .module('home')
      .factory('HomePagingResource', ['$resource', 'appCONSTANTS', HomePagingResource])
      .factory('DeleteHomeResource', ['$resource', 'appCONSTANTS', DeleteHomeResource])
      .factory('AddHomeResource', ['$resource', 'appCONSTANTS', AddHomeResource])
      .factory('UpdateHomeResource', ['$resource', 'appCONSTANTS', UpdateHomeResource])
   ;


      function HomePagingResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'HomesPaging', {}, {
        getAllPagingHomes: { method: 'GET', useToken: true} 
      })
    }

    function DeleteHomeResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Homes/:homeId', {}, {
        deleteHome: { method: 'DELETE', useToken: true} 
      })
    }

    function AddHomeResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Homes/', {}, { 
          addHome: { method: 'POST',useToken: true}
      })
  }

  function UpdateHomeResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Homes', {}, {
        updateHome: { method: 'PUT', useToken: true} 
      })
  }

        }());

  (function () {
    'use strict';

    angular
        .module('home')
        .controller('addHotelController', ['$rootScope', '$scope', '$filter', 'currencyPrepService','callBackFunction', 'selectedLanguage', '$translate', '$uibModal','$uibModalInstance', '$state', '$localStorage', 'authorizationService', 'templatePrepService', 'TemplatePagingResource', 'appCONSTANTS', 'ToastService', 'AddHotelResource', addHotelController]);


    function addHotelController($rootScope, $scope, $filter, currencyPrepService,callBackFunction, selectedLanguage, $translate, $uibModal, $uibModalInstance, $state, $localStorage, authorizationService, templatePrepService, TemplatePagingResource,appCONSTANTS, ToastService, AddHotelResource) {
        var vm = this;
        $scope.templateList = templatePrepService;
        $scope.currencyList = currencyPrepService;
        $scope.templateId="0";
        $scope.Rate = 0;
        $scope.CurrencyTypeId = 0;
        $scope.template;
        $scope.Price;
        $scope.IsMain = false;
        vm.TitleDictionary;
        vm.DescriptionDictionary;
        $scope.language = appCONSTANTS.supportedLanguage;
        $scope.selectedLanguage = selectedLanguage;

        $scope.changeId=function (val){
            $scope.templateId=val;
        }

                function refreshTemplates(){
			var k = TemplatePagingResource.getAllPagingTemplates({page:vm.currentPage}).$promise.then(function(results) {
				$scope.templateList = results
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

		vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshTemplates();
        }

        vm.close = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
		}

        $scope.AddNewHotel = function () {
            var newHotel = new AddHotelResource();

            newHotel.Rate =  $scope.Rate;
            if($scope.Currency == undefined){
                newHotel.CurrencyTypeId = null;
            }
            else{
                newHotel.CurrencyTypeId = $scope.Currency.currencyId;
            }

                        newHotel.TemplateId = $scope.templateId;
            newHotel.Price = $scope.Price;
            newHotel.IsMain = $scope.IsMain;
            newHotel.TitleDictionary = vm.TitleDictionary;
            newHotel.DescriptionDictionary = vm.DescriptionDictionary;

                  newHotel.$addHotel().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddSuccess'), "success");
                    callBackFunction();
                    $uibModalInstance.dismiss('cancel');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

    }

}());(function () {
    'use strict';

    angular
        .module('home')
        .controller('updateHotelController', ['$rootScope', '$scope','$uibModalInstance', 'UpdateHotelResource', 'templatePrepService','callBackFunction', '$filter', '$translate', '$uibModal', '$state', 'currencyPrepService', 'selectedLanguage', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService','Hotel', updateHotelController]);


    function updateHotelController($rootScope, $scope, $uibModalInstance, UpdateHotelResource,templatePrepService,callBackFunction, $filter, $translate, $uibModal, $state , currencyPrepService, selectedLanguage, $localStorage, authorizationService, appCONSTANTS,ToastService, Hotel) {
        var vm = this;
        $scope.hotelObj = Hotel;
        $scope.templateList = templatePrepService;
        $scope.currencyList = currencyPrepService;
        $scope.language = appCONSTANTS.supportedLanguage;
        $scope.selectedLanguage = selectedLanguage;



        vm.close = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
        }

        vm.backdrop = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
        }

        $scope.changeId=function (val){
            $scope.templateId=val;
        }

        $scope.UpdateHotel = function () {
            var newHotel = new UpdateHotelResource();
            newHotel.Rate =  $scope.hotelObj.rate;
            if($scope.hotelObj.currencyTypeId.currencyId == undefined){
                newHotel.CurrencyTypeId = null;
            }
            else{
                newHotel.CurrencyTypeId = $scope.hotelObj.currencyTypeId.currencyId;
            }
            newHotel.HotelId =$scope.hotelObj.hotelId;
            newHotel.TemplateId = $scope.templateId;
            newHotel.Price = $scope.hotelObj.price;
            newHotel.IsMain =$scope.hotelObj.isMain;
            newHotel.TitleDictionary = $scope.hotelObj.titleDictionary;
            newHotel.DescriptionDictionary = $scope.hotelObj.descriptionDictionary;
            newHotel.$updateHotel().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('EditSuccess'), "success");
                    $uibModalInstance.dismiss('cancel');
                    callBackFunction();

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

     }

})();


(function () {
    'use strict';

    angular
        .module('home')
        .controller('hotelController', ['$rootScope', '$http', '$scope', '$filter', 'currencyPrepService', 'templatePrepService', 'CurrencyResource','HotelPagingResource', 'TemplatePagingResource', 'hotelPagingPrepService', 'DeleteHotelResource', '$translate', '$uibModal', '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', hotelController]);


    function hotelController($rootScope, $http, $scope, $filter, currencyPrepService, templatePrepService, CurrencyResource, HotelPagingResource, TemplatePagingResource, hotelPagingPrepService, DeleteHotelResource, $translate, $uibModal, $state, $localStorage, authorizationService, appCONSTANTS, ToastService) {
        var vm = this;

             $scope.Rate=0;

             $scope.hotelList = hotelPagingPrepService;
         $scope.templateList = templatePrepService;
         $scope.currencyList = currencyPrepService;
         $scope.language = appCONSTANTS.supportedLanguage;

                 function refreshHotels(){
			var k = HotelPagingResource.getAllPagingHotels({page:vm.currentPage}).$promise.then(function(results) {
				$scope.hotelList = results;
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

        vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshHotels();
		}

                function confirmationDelete(hotelId){
			DeleteHotelResource.deleteHotel({hotelId:hotelId}).$promise.then(function(results) {
                ToastService.show("right","bottom","fadeInUp",$translate.instant('DeleteSuccess'),"success");
                vm.currentPage = 1;
				refreshHotels();
            },

                        function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

        vm.UpdateHotel = function (hotel) {
            TemplatePagingResource.getAllPagingTemplates().$promise.then(function(results) {
                CurrencyResource.getAllCurrencies().$promise.then(function(resultsCurrencies) {
                    $uibModal.open({
                        templateUrl: './app/GlobalAdmin/hotel/templates/editHotel.html',
                        controller: 'updateHotelController',
                        controllerAs: 'updateHotelCtrl',
                        resolve:{
                            templatePrepService: function(){return results;},
                            currencyPrepService: function(){return resultsCurrencies;},
                            callBackFunction: function(){return refreshHotels;},
                            selectedLanguage: function(){return $scope.selectedLanguage},
                            Hotel: function(){return hotel}
                        }

                            });
                },
                function(data, status) {
                    ToastService.show("right","bottom","fadeInUp",data.message,"error");
                });
            },
            function(data, status) {
                ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

                vm.AddHotel = function () {
            TemplatePagingResource.getAllPagingTemplates().$promise.then(function(results) {
                CurrencyResource.getAllCurrencies().$promise.then(function(resultsCurrencies) {
                    $uibModal.open({
                        templateUrl: './app/GlobalAdmin/hotel/templates/addHotel.html',
                        controller: 'addHotelController',
                        controllerAs: 'addHotelCtrl',
                        resolve:{
                            templatePrepService: function(){return results;},
                            currencyPrepService: function(){return resultsCurrencies;},
                            callBackFunction: function(){return refreshHotels;},
                            selectedLanguage: function(){return $scope.selectedLanguage}
                        }

                            });
                },
                function(data, status) {
                    ToastService.show("right","bottom","fadeInUp",data.message,"error");
                });
            },
            function(data, status) {
                ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });

                  }

        vm.DeleteTemplate = function(hotelId){			
			var modalContent = $uibModal.open({
				templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
				controller: 'confirmDeleteDialogController',
				controllerAs: 'deleteDlCtrl',
				resolve: {
                    itemId: function() { return hotelId },
                    itemName: function() { return null },
                    message: function() { return null },
					callBackFunction:function() { return confirmationDelete; }
				}

							});
		}
    }


    }());(function() {
    angular
      .module('home')
      .factory('HotelPagingResource', ['$resource', 'appCONSTANTS', HotelPagingResource])
      .factory('DeleteHotelResource', ['$resource', 'appCONSTANTS', DeleteHotelResource])
      .factory('AddHotelResource', ['$resource', 'appCONSTANTS', AddHotelResource])
      .factory('UpdateHotelResource', ['$resource', 'appCONSTANTS', UpdateHotelResource])
   ;

    function HotelPagingResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'HotelsPaging', {}, {
        getAllPagingHotels: { method: 'GET', useToken: true} 
      })
    }

    function DeleteHotelResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Hotels/:homeId', {}, {
        deleteHotel: { method: 'DELETE', useToken: true} 
      })
    }

    function AddHotelResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Hotels/', {}, { 
          addHotel: { method: 'POST',useToken: true}
      })
  }

  function UpdateHotelResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Hotels', {}, {
        updateHotel: { method: 'PUT', useToken: true} 
      })
  }

        }());

  (function () {
    'use strict';

    angular
        .module('home')
        .controller('addOfferController', ['$rootScope', '$scope', '$filter', 'currencyPrepService','callBackFunction', 'selectedLanguage', '$translate', '$uibModal','$uibModalInstance', '$state', '$localStorage', 'authorizationService', 'templatePrepService', 'TemplatePagingResource', 'appCONSTANTS', 'ToastService', 'AddOfferResource', addOfferController]);


    function addOfferController($rootScope, $scope, $filter, currencyPrepService,callBackFunction, selectedLanguage, $translate, $uibModal, $uibModalInstance, $state, $localStorage, authorizationService, templatePrepService, TemplatePagingResource,appCONSTANTS, ToastService, AddOfferResource) {
        var vm = this;
        $scope.templateList = templatePrepService;
        $scope.currencyList = currencyPrepService;
        $scope.templateId="0";
        $scope.Rate = 0;
        $scope.CurrencyTypeId = 0;
        $scope.template;
        $scope.Price;
        $scope.IsMain = false;
        vm.TitleDictionary;
        vm.DescriptionDictionary;
        $scope.language = appCONSTANTS.supportedLanguage;
        $scope.selectedLanguage = selectedLanguage;

        $scope.changeId=function (val){
            $scope.templateId=val;
        }

                function refreshTemplates(){
			var k = TemplatePagingResource.getAllPagingTemplates({page:vm.currentPage}).$promise.then(function(results) {
				$scope.templateList = results
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

		vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshTemplates();
        }

        vm.close = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
		}

        $scope.AddNewOffer = function () {
            var newOffer = new AddOfferResource();

            newOffer.Rate =  $scope.Rate;
            if($scope.Currency == undefined){
                newOffer.CurrencyTypeId = null;
            }
            else{
                newOffer.CurrencyTypeId = $scope.Currency.currencyId;
            }

                        newOffer.TemplateId = $scope.templateId;
            newOffer.Price = $scope.Price;
            newOffer.IsMain = $scope.IsMain;
            newOffer.TitleDictionary = vm.TitleDictionary;
            newOffer.DescriptionDictionary = vm.DescriptionDictionary;

                  newOffer.$addOffer().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddSuccess'), "success");
                    callBackFunction();
                    $uibModalInstance.dismiss('cancel');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

    }

}());(function () {
    'use strict';

    angular
        .module('home')
        .controller('updateOfferController', ['$rootScope', '$scope','$uibModalInstance', 'UpdateOfferResource', 'templatePrepService','callBackFunction', '$filter', '$translate', '$uibModal', '$state', 'currencyPrepService', 'selectedLanguage', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService','Offer', updateOfferController]);


    function updateOfferController($rootScope, $scope, $uibModalInstance, UpdateOfferResource,templatePrepService,callBackFunction, $filter, $translate, $uibModal, $state , currencyPrepService, selectedLanguage, $localStorage, authorizationService, appCONSTANTS,ToastService, Offer) {
        var vm = this;
        $scope.offerObj = Offer;
        $scope.templateList = templatePrepService;
        $scope.currencyList = currencyPrepService;
        $scope.language = appCONSTANTS.supportedLanguage;
        $scope.selectedLanguage = selectedLanguage;



        vm.close = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
        }

        vm.backdrop = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
        }

        $scope.changeId=function (val){
            $scope.templateId=val;
        }

        $scope.UpdateOffer = function () {
            var newOffer = new UpdateOfferResource();
            newOffer.Rate =  $scope.offerObj.rate;
            if($scope.offerObj.currencyTypeId.currencyId == undefined){
                newOffer.CurrencyTypeId = null;
            }
            else{
                newOffer.CurrencyTypeId = $scope.offerObj.currencyTypeId.currencyId;
            }
            newOffer.OfferId =$scope.offerObj.offerId;
            newOffer.TemplateId = $scope.templateId;
            newOffer.Price = $scope.offerObj.price;
            newOffer.IsMain =$scope.offerObj.isMain;
            newOffer.TitleDictionary = $scope.offerObj.titleDictionary;
            newOffer.DescriptionDictionary = $scope.offerObj.descriptionDictionary;
            newOffer.$updateOffer().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('EditSuccess'), "success");
                    $uibModalInstance.dismiss('cancel');
                    callBackFunction();

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

     }

})();


(function () {
    'use strict';

    angular
        .module('home')
        .controller('offerController', ['$rootScope', '$http', '$scope', '$filter', 'currencyPrepService', 'templatePrepService', 'CurrencyResource','OfferPagingResource', 'TemplatePagingResource', 'offerPagingPrepService', 'DeleteOfferResource', '$translate', '$uibModal', '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', offerController]);


    function offerController($rootScope, $http, $scope, $filter, currencyPrepService, templatePrepService, CurrencyResource, OfferPagingResource, TemplatePagingResource, offerPagingPrepService, DeleteOfferResource, $translate, $uibModal, $state, $localStorage, authorizationService, appCONSTANTS, ToastService) {
        var vm = this;

             $scope.Rate=0;

             $scope.offerList = offerPagingPrepService;
         $scope.templateList = templatePrepService;
         $scope.currencyList = currencyPrepService;
         $scope.language = appCONSTANTS.supportedLanguage;

                 function refreshOffers(){
			var k = OfferPagingResource.getAllPagingOffers({page:vm.currentPage}).$promise.then(function(results) {
				$scope.offerList = results;
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

        vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshOffers();
		}

                function confirmationDelete(offerId){
			DeleteOfferResource.deleteOffer({offerId:offerId}).$promise.then(function(results) {
                ToastService.show("right","bottom","fadeInUp",$translate.instant('DeleteSuccess'),"success");
                vm.currentPage = 1;
				refreshOffers();
            },

                        function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

        vm.UpdateOffer = function (offer) {
            TemplatePagingResource.getAllPagingTemplates().$promise.then(function(results) {
                CurrencyResource.getAllCurrencies().$promise.then(function(resultsCurrencies) {
                    $uibModal.open({
                        templateUrl: './app/GlobalAdmin/offer/templates/editOffer.html',
                        controller: 'updateOfferController',
                        controllerAs: 'updateOfferCtrl',
                        resolve:{
                            templatePrepService: function(){return results;},
                            currencyPrepService: function(){return resultsCurrencies;},
                            callBackFunction: function(){return refreshOffers;},
                            selectedLanguage: function(){return $scope.selectedLanguage},
                            Offer: function(){return offer}
                        }

                            });
                },
                function(data, status) {
                    ToastService.show("right","bottom","fadeInUp",data.message,"error");
                });
            },
            function(data, status) {
                ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

                vm.AddOffer = function () {
            TemplatePagingResource.getAllPagingTemplates().$promise.then(function(results) {
                CurrencyResource.getAllCurrencies().$promise.then(function(resultsCurrencies) {
                    $uibModal.open({
                        templateUrl: './app/GlobalAdmin/offer/templates/addOffer.html',
                        controller: 'addOfferController',
                        controllerAs: 'addOfferCtrl',
                        resolve:{
                            templatePrepService: function(){return results;},
                            currencyPrepService: function(){return resultsCurrencies;},
                            callBackFunction: function(){return refreshOffers;},
                            selectedLanguage: function(){return $scope.selectedLanguage}
                        }

                            });
                },
                function(data, status) {
                    ToastService.show("right","bottom","fadeInUp",data.message,"error");
                });
            },
            function(data, status) {
                ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });

                  }

        vm.DeleteTemplate = function(offerId){			
			var modalContent = $uibModal.open({
				templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
				controller: 'confirmDeleteDialogController',
				controllerAs: 'deleteDlCtrl',
				resolve: {
                    itemId: function() { return offerId },
                    itemName: function() { return null },
                    message: function() { return null },
					callBackFunction:function() { return confirmationDelete; }
				}

							});
		}
    }


    }());(function() {
    angular
      .module('home')
      .factory('OfferPagingResource', ['$resource', 'appCONSTANTS', OfferPagingResource])
      .factory('DeleteOfferResource', ['$resource', 'appCONSTANTS', DeleteOfferResource])
      .factory('AddOfferResource', ['$resource', 'appCONSTANTS', AddOfferResource])
      .factory('UpdateOfferResource', ['$resource', 'appCONSTANTS', UpdateOfferResource])
   ;

    function OfferPagingResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'OffersPaging', {}, {
        getAllPagingOffers: { method: 'GET', useToken: true} 
      })
    }

    function DeleteOfferResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Offers/:homeId', {}, {
        deleteOffer: { method: 'DELETE', useToken: true} 
      })
    }

    function AddOfferResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Offers/', {}, { 
          addOffer: { method: 'POST',useToken: true}
      })
  }

  function UpdateOfferResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Offers', {}, {
        updateOffer: { method: 'PUT', useToken: true} 
      })
  }

        }());

  (function () {
    'use strict';

	    angular
        .module('home')
        .controller('addTemplateController', ['$scope','$state','$uibModalInstance','$http','$translate','appCONSTANTS' , 'AddTemplateResource','ToastService','callBackFunction','$rootScope',  addTemplateController])

	function addTemplateController($scope, $state , $uibModalInstance,$http, $translate,appCONSTANTS , AddTemplateResource,ToastService,callBackFunction,$rootScope){
		var vm = this;
        vm.templateName = "";
		vm.close = function(){
			$uibModalInstance.dismiss('cancel');
		}

			vm.AddTemplate = function(){
            var newTemplate = new Object();
            newTemplate.templateName = vm.templateName; 

			var model = new FormData();
			model.append('data', JSON.stringify(newTemplate));
			model.append('file', templateImage);
			$http({
				method: 'POST',
				url: appCONSTANTS.API_URL + 'Templates',
				useToken: true,
				headers: { 'Content-Type': undefined },
				data: model
			}).then(
				function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('AddSuccess'),"success"); 
					 $uibModalInstance.dismiss('cancel');
					 callBackFunction();
				},
				function(data, status) {
					ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
				}
            );
        }

                vm.LoadUploadImage = function() {
			$("#templateImage").click();
        }

        		var templateImage; 
		$scope.AddTemplateImage = function(element) {
            vm.templateName = element[0].name;
			var imageFile = element[0];

			var allowedImageTypes = ['image/jpg', 'image/png', 'image/jpeg']

			if (imageFile && imageFile.size >= 0 && ((imageFile.size / (1024 * 1000)) < 2)) {

				if (allowedImageTypes.indexOf(imageFile.type) !== -1) {
					$scope.newTemplateForm.$dirty=true;
					$scope.$apply(function() {

												templateImage= imageFile;
						var reader = new FileReader();

						reader.onloadend = function() {
							vm.templateImage= reader.result;

														$scope.$apply();
						};
						if (imageFile) {
							reader.readAsDataURL(imageFile);
						}
					})
				} else {
					$("#logoImage").val('');
					ToastService.show("right","bottom","fadeInUp",$translate.instant('imageTypeError'),"error");
				}

			} else {
				if (imageFile) {
					$("#logoImage").val('');
					ToastService.show("right","bottom","fadeInUp",$translate.instant('imgaeSizeError'),"error");
				}

			}


		}
	}	
}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('templateController', ['$scope','$stateParams','$translate', 'appCONSTANTS','$uibModal','TemplatePagingResource', 'templatePagingPrepService','ToastService' , 'DeleteTemplateResource',  templateController])

    function templateController($scope,$stateParams ,$translate , appCONSTANTS,$uibModal,TemplatePagingResource, templatePagingPrepService, ToastService, DeleteTemplateResource){

        var vm = this;

        $scope.sidebar.show = true;
        $scope.header.show = true;

		vm.Templates = templatePagingPrepService;

        		function refreshTemplates(){
			var k = TemplatePagingResource.getAllPagingTemplates({page:vm.currentPage}).$promise.then(function(results) {
				vm.Templates = results
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

		vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshTemplates();
        }

        vm.AddTemplate = function () {
            $uibModal.open({
                templateUrl: './app/GlobalAdmin/template/templates/addTemplate.html',
                controller: 'addTemplateController',
                controllerAs: 'addTemplateCtrl',
                resolve:{
                    callBackFunction:function(){return refreshTemplates;}
                }

            });
		}

				vm.DeleteTemplate = function(templateId){			
			var modalContent = $uibModal.open({
				templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
				controller: 'confirmDeleteDialogController',
				controllerAs: 'deleteDlCtrl',
				resolve: {
                    itemId: function() { return templateId },
                    itemName: function() { return null },
                    message: function() { return null },
					callBackFunction:function() { return confirmationDelete; }
				}

							});
		}

		function confirmationDelete(templateId){
			DeleteTemplateResource.deleteTemplate({templateId:templateId}).$promise.then(function(results) {
                ToastService.show("right","bottom","fadeInUp",$translate.instant('DeleteSuccess'),"success");
                vm.currentPage = 1;
				refreshTemplates();
            },

                        function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
            });
        }



        					}

	}
());
(function() {
    angular
      .module('home')
      .factory('TemplateResource', ['$resource', 'appCONSTANTS', TemplateResource])
      .factory('TemplatePagingResource', ['$resource', 'appCONSTANTS', TemplatePagingResource])
      .factory('DeleteTemplateResource', ['$resource', 'appCONSTANTS', DeleteTemplateResource])
      .factory('AddTemplateResource', ['$resource', 'appCONSTANTS', AddTemplateResource]);

      function AddTemplateResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Templates/', {}, { 
        addTemplate: { method: 'POST',useToken: true}
      })
    }

        function TemplateResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Templates', {}, {
        getAllTemplates: { method: 'GET', useToken: true, isArray:true } 
      })
    }

    function TemplatePagingResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'TemplatesPaging', {}, {
        getAllPagingTemplates: { method: 'GET', useToken: true } 
      })
    }


    function DeleteTemplateResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Templates/:templateId', {}, {
        deleteTemplate: { method: 'DELETE', useToken: true} 
      })
    }

        }());(function () {
    'use strict';

    angular
        .module('home')
        .controller('addOurTeamController', ['$rootScope', '$scope', '$filter','callBackFunction', 'selectedLanguage', '$translate', '$uibModal','$uibModalInstance', '$state', '$localStorage', 'authorizationService', 'templatePrepService', 'TemplatePagingResource', 'appCONSTANTS', 'ToastService', 'AddOurTeamResource', addOurTeamController]);


    function addOurTeamController($rootScope, $scope, $filter,callBackFunction, selectedLanguage, $translate, $uibModal, $uibModalInstance, $state, $localStorage, authorizationService, templatePrepService, TemplatePagingResource,appCONSTANTS, ToastService, AddOurTeamResource) {
        var vm = this;
        $scope.templateList = templatePrepService;
        $scope.templateId="0";
        $scope.Rate = 0;
        $scope.template;
        $scope.Price;
        $scope.IsMain = false;
        vm.TitleDictionary;
        vm.DescriptionDictionary;
        $scope.language = appCONSTANTS.supportedLanguage;
        $scope.selectedLanguage = selectedLanguage;

        $scope.changeId=function (val){
            $scope.templateId=val;
        }

                function refreshTemplates(){
			var k = TemplatePagingResource.getAllPagingTemplates({page:vm.currentPage}).$promise.then(function(results) {
				$scope.templateList = results
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
        }

		vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshTemplates();
        }

        vm.close = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
		}

        $scope.AddNewOurTeam = function () {
            var newOurTeam = new AddOurTeamResource();
            if($scope.templateId == 0){
                newOurTeam.TemplateId = $scope.templateList.results[0].templateId;
            }
            else{
                newOurTeam.TemplateId = $scope.templateId;
            }
            newOurTeam.IsMain = $scope.IsMain;
            newOurTeam.TitleDictionary = vm.TitleDictionary;
            newOurTeam.DescriptionDictionary = vm.DescriptionDictionary;

                  newOurTeam.$addOurTeam().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddSuccess'), "success");
                    callBackFunction();
                    $uibModalInstance.dismiss('cancel');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

    }

}());(function () {
    'use strict';

    angular
        .module('home')
        .controller('updateOurTeamController', ['$rootScope', '$scope','$uibModalInstance', 'UpdateOurTeamResource', 'templatePrepService','callBackFunction', '$filter', '$translate', '$uibModal', '$state', 'selectedLanguage', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService','OurTeam', updateOurTeamController]);


    function updateOurTeamController($rootScope, $scope, $uibModalInstance, UpdateOurTeamResource,templatePrepService,callBackFunction, $filter, $translate, $uibModal, $state, selectedLanguage, $localStorage, authorizationService, appCONSTANTS,ToastService, OurTeam) {
        var vm = this;
        $scope.ourTeamObj = OurTeam;
        $scope.templateList = templatePrepService;
        $scope.language = appCONSTANTS.supportedLanguage;
        $scope.selectedLanguage = selectedLanguage;

               vm.close = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
        }

        vm.backdrop = function(){
            $uibModalInstance.dismiss('cancel');
            callBackFunction();
        }

        $scope.changeId=function (val){
            $scope.templateId=val;
        }

        $scope.UpdateOurTeam = function () {
            var newOurTeam = new UpdateOurTeamResource();

                        newOurTeam.OurTeamId =$scope.ourTeamObj.ourTeamId;

                        if($scope.templateId == undefined){
                newOurTeam.TemplateId = $scope.ourTeamObj.templateId;
            }
            else{
                newOurTeam.TemplateId = $scope.templateId;
            }
            newOurTeam.IsMain =$scope.ourTeamObj.isMain;
            newOurTeam.TitleDictionary = $scope.ourTeamObj.titleDictionary;
            newOurTeam.DescriptionDictionary = $scope.ourTeamObj.descriptionDictionary;
            newOurTeam.$updateOurTeam().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('EditSuccess'), "success");
                    $uibModalInstance.dismiss('cancel');
                    callBackFunction();

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

     }

})();


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


    }());(function() {
    angular
      .module('home')
      .factory('OurTeamPagingResource', ['$resource', 'appCONSTANTS', OurTeamPagingResource])
      .factory('DeleteOurTeamResource', ['$resource', 'appCONSTANTS', DeleteOurTeamResource])
      .factory('AddOurTeamResource', ['$resource', 'appCONSTANTS', AddOurTeamResource])
      .factory('UpdateOurTeamResource', ['$resource', 'appCONSTANTS', UpdateOurTeamResource])
   ;

    function OurTeamPagingResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'OurTeamsPaging', {}, {
        getAllPagingOurTeams: { method: 'GET', useToken: true} 
      })
    }

    function DeleteOurTeamResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'OurTeams/:ourTeamId', {}, {
        deleteOurTeam: { method: 'DELETE', useToken: true} 
      })
    }

    function AddOurTeamResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'OurTeams/', {}, { 
          addOurTeam: { method: 'POST',useToken: true}
      })
  }

  function UpdateOurTeamResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'OurTeams', {}, {
        updateOurTeam: { method: 'PUT', useToken: true} 
      })
  }

        }());

