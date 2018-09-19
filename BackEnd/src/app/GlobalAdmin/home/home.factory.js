(function() {
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
  
