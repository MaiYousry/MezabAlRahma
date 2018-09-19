(function() {
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
  
