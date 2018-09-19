(function() {
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
  
