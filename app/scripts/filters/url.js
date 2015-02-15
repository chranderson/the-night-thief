'use strict';


angular.module('theNightThiefApp')
.filter('hostnameFromUrl', function () {
  return function (str) {
    var authorUrl = document.createElement('a');

    authorUrl.href = str;

    return authorUrl.hostname;
  };
});