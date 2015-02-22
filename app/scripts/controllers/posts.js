'use strict';
/**
 * @ngdoc function
 * @name theNightThiefApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the theNightThiefApp
 */
app.controller('PostsCtrl', function ($scope, $log, currentAuth, $location, Post) {
	$scope.posts = Post.all;

	$scope.post = {
		'title': 'The Number One Post Title',
		'author': 'Bradley',
		'body': ''
	};

	$scope.submitPost = function () {
		$scope.post.creatorUID = currentAuth.auth.uid;
		$log.debug($scope.post.creatorUID);
		Post.create($scope.post).then(function (ref) {
			$location.path('/posts/' + ref.name());
			$scope.post = {
				'title': 'The Number One Post Title',
				'author': 'Bradley',
				'body': ''
			};
		});
	};
  $scope.deletePost = function (post) {
    Post.delete(post);
  };

});




