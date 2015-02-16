'use strict';

/**
 * @ngdoc function
 * @name theNightThiefApp.controller:FilmCtrl
 * @description
 * # FilmCtrl
 * Controller of the theNightThiefApp
 */
app.controller('FilmCtrl', ['$scope',  function($scope) {
  	$scope.films = [
  		{'id':0, 'title':'Twisted Little Sister (lyric video)', 'videoUrl':'http://vimeo.com/105942778', 'imgUrl':'http://i.vimeocdn.com/video/489847282_590x332.jpg'},
  		{'id':1, 'title':'BAG OF BONES (Oxix52 Remix)', 'videoUrl':'http://vimeo.com/105199350', 'imgUrl':'http://i.vimeocdn.com/video/488889989_590x332.jpg'}
  	];

  }]);
