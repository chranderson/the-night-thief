'use strict';
/**
 * @ngdoc function
 * @name theNightThiefApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the theNightThiefApp
 */
app.controller('PostsCtrl', function ($scope, Post) {
	$scope.posts = Post.all;
  $scope.deletePost = function (post) {
    Post.delete(post);
  };

});




