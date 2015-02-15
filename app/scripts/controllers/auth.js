'use strict';

/**
 * @ngdoc function
 * @name theNightThiefApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the theNightThiefApp
 */
 app.controller('AuthCtrl', ['$scope', 'Auth', '$log', '$location', '$timeout', 'Users', 'FIREBASE_URL', '$firebaseAuth', function ($scope, Auth, $log, $location, $timeout, Users, FIREBASE_URL, $firebaseAuth) {
 	var ref = new Firebase(FIREBASE_URL);


 	// $scope.loggedIn = currentAuth;
 	// if (currentAuth) {
 	// 	var userData = ref.getAuth();
 	// 	$scope.currentEmail = userData.password.email;
 	// 	$log.debug(userData.password.email);
 	// }

 	// if (!currentAuth) {
 	// 	var userData = ref.getAuth();
 	// 	$scope.currentEmail = userData.password.email;
 	// 	$log.debug(userData.password.email);
 	// }

 	$scope.user = {
 		email: '',
 		password: '',
 		name: ''
 	};
 	$scope.loginEmail = '';
 	$scope.loginPassword = '';

 	$scope.password = {
 		old: '',
 		updated: '',
 	};


 	$scope.updateEmail = '';
 	$scope.currentPassword = '';



 	var authSave = function () {
 		Users.createUser($firebaseAuth(ref).$getAuth());
 	};
 	$scope.register = function () {
		Auth.register($scope.user.email, $scope.user.password);
 			$scope.user = {
		 		email: '',
		 		password: ''
	 		};
	 		//need to do this async with the login
	 		$timeout(function () {
	 			authSave();
	 			$location.path('/');
	 		}, 1500);

 	};


 	$scope.login = function () {
 		Auth.login($scope.loginEmail, $scope.loginPassword);
 		$rootScope.loggedIn = currentAuth;
 	};

 	$scope.newPassword = function () {
 		Auth.newPassword($scope.currentEmail, $scope.password.old, $scope.password.updated);
 			$scope.password = {
		 		old: '',
		 		updated: '',
		 	};
 	};

 	$scope.newEmail = function () {
 		Auth.newEmail($scope.currentEmail, $scope.updatedEmail, $scope.currentPassword);
 			$scope.updatedEmail = '';
 			$scope.currentPassword = '';
 	};

 }]);