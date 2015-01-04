'use strict';

/**
 * @ngdoc function
 * @name theNightThiefApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the theNightThiefApp
 */
angular.module('theNightThiefApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  ///////////////////////
	// particles settings
	///////////////////////
      particlesJS('particles-js', {
    	particles: {
    		color: '#66676c',
          shape: 'circle', // "circle", "edge" or "triangle"
          opacity: 1,
          size: 1,
          size_random: true,
          nb: 500,
          line_linked: {
          	enable_auto: false,
          	distance: 0,
          	color: '#fff',
          	opacity: 1,
          	width: 1,
          	condensed_mode: {
          		enable: true,
          		rotateX: 600,
          		rotateY: 600
          	}
          },
          anim: {
          	enable: true,
          	speed: .2
          }
        },
        interactivity: {
        	enable: false,
        	mouse: {
        		distance: 250
        	},
          detect_on: 'window', // "canvas" or "window"
          mode: 'grab',
          line_linked: {
          	opacity: .5
          },
          events: {
          	onclick: {
          		enable: false,
              mode: 'push', // "push" or "remove" (particles)
              nb: 4
            }
          }
        },
        /* Retina Display Support */
        retina_detect: true
      });


  });

