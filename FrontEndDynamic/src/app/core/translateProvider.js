(function() {
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
  