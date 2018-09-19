(function() {
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
  
