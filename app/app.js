'use strict';

let doggo = angular.module('Doggo', ['ngRoute']);

doggo.config(($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: 'templates/test.html'
	})
	.otherwise('/');
});
