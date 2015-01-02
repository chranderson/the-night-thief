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
    $scope.tracks = [
      {'id': '0', 'title': 'Track 1', 'url': 'audio/snake-mistakes.mp3', 'artist': 'Dan Deacon'},
      {'id': '1', 'title': 'Track 2', 'url': 'audio/snake-mistakes.mp3', 'artist': 'Dan Twocon'},
      {'id': '2', 'title': 'Track 3', 'url': 'audio/snake-mistakes.mp3', 'artist': 'Dan Threecon'}
    ];
  });
