'use strict';

/**
 * @ngdoc function
 * @name theNightThiefApp.controller:AudioCtrl
 * @description
 * # AudioCtrl
 * Controller of the theNightThiefApp
 */
angular.module('theNightThiefApp')
  .controller('AudioCtrl', function ($scope) {
    $scope.playing = false;
      // $scope.audio = document.createElement('audio');
      // $scope.audio.src = 'audio/snake-mistakes.mp3';
      // $scope.play = function() {
        // $scope.audio.play();
        // $scope.playing = true;
      // };
      // $scope.stop = function() {
        // $scope.audio.pause();
        // $scope.playing = false;
      // };
      // $scope.audio.addEventListener('ended', function() {
        // $scope.$apply(function() {
          // $scope.stop()
        // });
      // });


    // $scope.tracks = [
    //   {'id': '0', 'title': 'Track 1', 'url': 'audio/snake-mistakes.mp3', 'artist': 'Dan Deacon'},
    //   {'id': '1', 'title': 'Track 2', 'url': 'audio/snake-mistakes.mp3', 'artist': 'Dan Twocon'},
    //   {'id': '2', 'title': 'Track 3', 'url': 'audio/snake-mistakes.mp3', 'artist': 'Dan Threecon'}
    // ];
  });
