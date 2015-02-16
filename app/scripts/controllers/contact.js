'use strict';

/**
 * @ngdoc function
 * @name theNightThiefApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the theNightThiefApp
 */
app.controller('ContactCtrl',['$scope', 'Contact', '$log', function ($scope, Contact, $log) {
		$scope.contacts = Contact.all;
    $scope.contact = {
    	email: '',
    	name: '',
    	message: ''
    };


    $scope.submitContact = function () {
    	Contact.create($scope.contact).then(function () {
    		$scope.contact = {
    			email: '',
    			name: '',
    			message: ''
    		};
    	});
    };

	  $scope.deleteContact = function (contact) {
	    Contact.delete(contact);
	  };

  }]);
