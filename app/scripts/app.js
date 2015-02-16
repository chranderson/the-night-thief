/* global app:true */
/* exported app */

'use strict';

/**
 * @ngdoc overview
 * @name theNightThiefApp
 * @description
 * # theNightThiefApp
 *
 * Main module of the application.
 */
var app = angular
	.module('theNightThiefApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'mm.foundation.offcanvas',
    'plangular',
    'firebase',
    'angularUtils.directives.dirPagination'
  ])
  .constant('FIREBASE_URL', 'https://nightthief.firebaseio.com/')
  .run(['$rootScope', '$location', '$log', function($rootScope, $location, $log) {
    $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
      if (error === 'AUTH_REQUIRED') {
        $location.path('/login');
      }
    });
    $rootScope.$log = $log;
  }])
  .config(['$routeProvider', '$logProvider', function($routeProvider, $logProvider) {
  	 $logProvider.debugEnabled(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          // controller will not be loaded until $waitForAuth resolves
          // Auth refers to our $firebaseAuth wrapper above
          'currentAuth': ['Auth', function(Auth) {
            // $waitForAuth returns a promise so the resolve waits for it to complete
            return Auth.auth.$waitForAuth();
          }]
        }
      })
      .when('/film', {
        templateUrl: 'views/film.html',
        controller: 'FilmCtrl'
      })
      // .when('/posts', {
      //   templateUrl: 'views/posts.html',
      //   controller: 'PostsCtrl'
      // })
      // .when('/posts/:postId', {
      //     templateUrl: 'views/showpost.html',
      //     controller: 'PostViewCtrl'
      //   })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/login', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl',
        resolve: {
          // controller will not be loaded until $waitForAuth resolves
          // Auth refers to our $firebaseAuth wrapper above
          'currentAuth': ['Auth', function(Auth) {
            // $waitForAuth returns a promise so the resolve waits for it to complete
            return Auth.auth.$waitForAuth();
          }]
        }
      })
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AuthCtrl',
        resolve: {
          // controller will not be loaded until $waitForAuth resolves
          // Auth refers to our $firebaseAuth wrapper above
          'currentAuth': ['Auth', function(Auth) {
            // $waitForAuth returns a promise so the resolve waits for it to complete
            return Auth.auth.$requireAuth();
          }]
        }
      })
      .otherwise({
        redirectTo: '/404.html'
      });
  }]);







