'use strict';

/**
 * @ngdoc function
 * @name theNightThiefApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the theNightThiefApp
 */
 app.controller('MainCtrl', ['$scope','currentAuth', '$location', 'Auth', 'FIREBASE_URL', '$log',
 	function ($scope, currentAuth, $location, Auth, FIREBASE_URL, $log) {
	 	$log.debug(currentAuth);
	 	if (!currentAuth)   {
	 		$location.path('/login');
	 	}

	    	$scope.logout = function () {
	    		Auth.logout();
	    		$location.path('/login');
	    	};

	    	Auth.monitorAuth();

}]);