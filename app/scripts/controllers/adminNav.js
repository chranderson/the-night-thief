'use strict';

/**
 * @ngdoc function
 * @name theNightThiefApp.controller:AdminNavCtrl
 * @description
 * # AdminNavCtrl
 * Controller of the theNightThiefApp
 */

app.controller('AdminNavCtrl', ['$scope', '$location', 'Post', function($scope, $location, Post) {
	$scope.post = {title: '', body: '', authorUrl: '', author: ''};

  $scope.submitPost = function () {
		Post.create($scope.post).then(function (ref) {
     $location.path('/posts/' + ref.name());
     $scope.post = {title: '',body: '',authorUrl: '',author: ''};
    });
    console.log($scope.post);
  };

}]);

