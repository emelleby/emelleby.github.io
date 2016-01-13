// SERVICES
weatherApp.service('cityService', function () {
	
	// data is coming in here and can be fetched by the controllers
	this.city = "Bangkok, TH";
	
});

// Service for getting the data
weatherApp.service('weatherService', ['$resource', function($resource) {
	
	// Method to be called for data
	this.GetWeather = function (city, days) {
	
		var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?appid=2de143494c0b295cca9337e1e96b00e0", {
			callback: "JSON_CALLBACK" }, { get: { method: "JSONP"}});

		return weatherAPI.get({ q: city, cnt: days });
		
	};
}]);