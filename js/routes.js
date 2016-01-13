//ROUTES
weatherApp.config(function ($routeProvider) {
	
	$routeProvider

		.when('/forecast', {
			templateUrl: 'pages/forecast.html',
			controller: 'forecastCtrl'
		})
	
		.when('/forecast/:days', {
				templateUrl: 'pages/forecast.html',
				controller: 'forecastCtrl'
			})	
		
		.when('/', {
			templateUrl: 'pages/home.html',
			controller: 'mainController'
		})

});