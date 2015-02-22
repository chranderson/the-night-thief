'use strict';

app.controller('PostViewCtrl', function ($scope, $log, $routeParams, Post) {
  $scope.post = Post.get($routeParams.postId);

  $log.debug($scope.post);
  $scope.deletePost = function (post) {
    // Post.delete(post.$id);
    Post.delete(post);

    $log.debug(post);
  };
});