// Controllers
weatherApp.controller('mainController', ['$scope', '$location', 'cityService', function ($scope, $location, cityService) {
	
	// data being fetched from the service into the $scope
	$scope.city = cityService.city;
	
	// Watch the value in the city
	$scope.$watch('city', function () {
		
		cityService.city = $scope.city;
		
	});
	
	$scope.submit = function() {
		$location.path("/forecast");		
	}
    console.log(cityService.city);
	
}]);



weatherApp.controller('forecastCtrl', ['$scope', '$routeParams', '$sce', 'cityService', 'weatherService', function ($scope, $routeParams, $sce, cityService, weatherService) {
	
	$scope.city = cityService.city;
	
//	$scope.lat = cityService.
	
	$scope.days = $routeParams.days || '2';
	
	$scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);
	
	$scope.convertToCelcius = function (degK) {
		
		return Math.round(degK - 273.15);
	}
		
	console.log(cityService.city);
	console.log($scope.weatherResult);
	
	// adding the factory for promotions			 
	$scope.showMap = false;
	$scope.message="Loading ...";
	$scope.location = weatherService.GetWeather($scope.city, $scope.days)
			.$promise.then(
					function(response){
						$scope.location = response;
						$scope.showMap = true;
						console.log($scope.location);
					},
					function(response) {
						$scope.message = "Error: "+response.status + " " + response.statusText;
					}
			);
	
	 $scope.trustSrc = function(src) {
		return $sce.trustAsResourceUrl(src);
	  }
	 $scope.wintyty = "https://embed.windyty.com/?";
    
}]);
