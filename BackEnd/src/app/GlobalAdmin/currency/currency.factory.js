(function() {
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
  
