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
	 	var authstuff = currentAuth;

	 	// $log.debug(authstuff.password.name);
	 	// if (!currentAuth)   {
	 	// 	$location.path('/login');
	 	// } else if (currentAuth) {
	 	// 	$location.path('/posts')
	 	// }



	    	// $scope.logout = function () {
	    	// 	Auth.logout();
	    	// 	$location.path('/login');
	    	// };

	    	Auth.monitorAuth();

}]);