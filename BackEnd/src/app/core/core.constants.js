(function() {
	angular
		.module('core')
		.constant('appCONSTANTS', { 
 		 'API_URL': 'http://mezab-al-rahma.azurewebsites.net/api/',
		  	// 'API_URL': 'http://localhost:3152/api/',
			'defaultLanguage':'en',
			'supportedLanguage':{
				'en':{'key':'en','value':'english'},
				'ar':{'key':'ar','value':'arabic'}
			}
		})
		.constant('messageTypeEnum', {
			success: 0,
			warning: 1,
			error: 2
		}).constant('userRolesEnum', {
			GlobalAdmin:"GlobalAdmin"
    });
}());