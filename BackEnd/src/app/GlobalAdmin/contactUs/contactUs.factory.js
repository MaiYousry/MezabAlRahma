(function() {
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
  
