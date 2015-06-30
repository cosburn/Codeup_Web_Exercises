"use strict";
(function(){
	var app = angular.module("blogComment");

	app.controller("CommentController", ["$scope", "$http", "$log", function($scope, $http, $log){

		//not sure if I need to do another ajax request, or how to reference the data or posts array from the other module. 
		//also, can I reference $scope variables from the other module here?

	}]);


})();