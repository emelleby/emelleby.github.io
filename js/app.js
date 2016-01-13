'use strict';

//Module with dependencies in brackets - remember to include these in HTML script tags.
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource'])

.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
	// Allow same origin resource loads.
	'self',
	// Allow loading from our assets domain.  Notice the difference between * and **.
	"https://embed.windyty.com/**",
	"http://www.youtube.com/embed/**"
  ]);

})

;

/*	.config(function($sceDelegateProvider, apiUrl) {
	  $sceDelegateProvider.resourceUrlWhitelist([
	   'self',
	   "https://embed.windyty.com/**",
	   
	  ]);
	});
	
; 
*/