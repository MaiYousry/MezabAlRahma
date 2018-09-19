(function() {
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
  
