"use strict";
(function() {
	var app = angular.module("angularBlog",[]);

	app.controller("BlogController", ["$scope", "$http","$log",function($scope, $http,$log){
		$scope.posts = [];

		//ajax request to load information from the server
		$http.get("/data/blog.json").success(function(data){
			$log.info("ajax request success");
			$scope.posts = data;
			$log.info(data);
		}).error(function(){
			$log.info("error - ajax request failed");
		});

		$scope.addPost = function(title,date,content) {
			var newPost = {
				"title" : title,
				"date" : date,
				"content" : content,
			};
			$scope.posts.unshift(newPost);
			$log.info($scope.posts);
		};


	}]);


})();