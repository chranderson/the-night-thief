'use strict';

/**
 * @ngdoc function
 * @name theNightThiefApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the theNightThiefApp
 */
angular.module('theNightThiefApp')
  .controller('BlogCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
