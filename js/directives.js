//DIRECTIVES
weatherApp.directive("weatherReport", function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/weatherreport.html',
		replace:true,
		scope: {
			weatherDay: "=",
			convertToStd: "&",
			// convertToDate: "&",
			dateFormat: "@"
			
		}
	}
});

weatherApp.directive("windyty", function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/windyty.html',
		replace:true,
		//scope: {
		//	weatherResult: "="}
	}
});

// Common directive for Focus on cell at load
angular.module('weatherApp').directive('focus',
	function($timeout) {
		return {
			scope : {
				trigger : '@focus'
			},
			link : function(scope, element) {
				scope.$watch('trigger', function(value) {
					if (value === "true") {
						$timeout(function() {
							element[0].focus();
						});
					}
				});
			}
		};
	}
); 