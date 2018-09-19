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
  
