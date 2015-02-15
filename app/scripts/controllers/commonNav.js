'use strict';

/**
 * @ngdoc function
 * @name theNightThiefApp.controller:commonNavCtrl
 * @description
 * # commonNavCtrl
 * Controller of the theNightThiefApp
 */

app.controller('commonNavCtrl', ['$scope', '$location', 'Auth',
	function($scope, $location, Auth) {

	$scope.logout = function () {
	    		Auth.logout();
	    		$location.path('/login');
	    	};

}]);

