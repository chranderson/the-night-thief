'use strict';

/**
 * @ngdoc overview
 * @name theNightThiefApp
 * @description
 * # theNightThiefApp
 *
 * Main module of the application.
 */
angular
  .module('theNightThiefApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'mm.foundation.offcanvas',
    'plangular'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/audio', {
        templateUrl: 'views/audio.html',
        controller: 'AudioCtrl'
      })
      .when('/film', {
        templateUrl: 'views/film.html',
        controller: 'FilmCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(false);
  });



