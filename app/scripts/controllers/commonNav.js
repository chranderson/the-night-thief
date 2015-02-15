'use strict';

/**
 * @ngdoc function
 * @name theNightThiefApp.controller:commonNavCtrl
 * @description
 * # commonNavCtrl
 * Controller of the theNightThiefApp
 */

app.controller('commonNavCtrl', ['$scope', '$rootScope', 'currentAuth', '$location', 'Auth',
	function($scope, $rootScope, currentAuth, $location, Auth) {

	$rootScope.loggedIn = currentAuth;

	$scope.logout = function () {
	    		Auth.logout();
	    		$location.path('/login');
	    	};

}]);

