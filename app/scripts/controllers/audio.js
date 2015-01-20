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
    	'https://soundcloud.com/thenightthief/my-love-is-whole',
    	'https://soundcloud.com/thenightthief/sunblind',
    	'https://soundcloud.com/thenightthief/everweare',,
    	'https://soundcloud.com/thenightthief/bag-of-bones-oxix52-remix'
    ];
  });
