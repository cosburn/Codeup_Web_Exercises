"use strict";

(function() {
    var app = angular.module("restaurantModule", []);

    app.controller("RestaurantController", ['$scope', function($scope, $http) {
	   //loads data into array
	   //managages rating calculations for display


	   // Create variable to hold rating and average values
    	this.restaurants = [];
    	var that = this;

    	// get data
        var getRestaurants = $http.get("data/restaurants.json").
        	success(function(data, status, headers, config) {
        		that.restaurants = data;
        	}).
        	error(function(data, status, headers, config){
        		console.log(status);
	        	console.log("request failed");
        	});

	    // calculate average of 1 - 5 ratings
	    this.getAverage = function(restaurant, rating) {
	    	var average = 0;
        	restaurant.reviews.forEach(function(review){
        		average += review[rating];
        	});
        	average = Math.round((average / restaurant.reviews.length));
	    	return average;
	    };

	    // calculate percent of reviews for true/false ratings
	    this.getPercent = function(restaurant, rating) {
	    	var responses = [];
	    	var percentYes = 0;

	    	restaurant.reviews.forEach(function(review) {
	    		if (review[rating] == true) {
	    			percentYes += 1;
	    		};
	    	});
	    	percentYes = ((percentYes / restaurant.reviews.length)*100);
	    	return percentYes;
	    };
	    // create new array to put all the things that fit the categories checked
	    this.foodIncludes = [];
	    this.occasionIncludes = [];

	    // add category to this.categoryIncludes when that box is checked
	    this.includeFood = function(food) {
	    	//iterate through restaurants.reviews["food"]
	    	//if the item in the array matches input food parameter, push it to this.foodIncludes
	    };
	    this.includeOccasion = function(occasion) {
	    	//iterate through restaurants.reviews["occasion"]
	    	//if the item in the array matches input occasion parameter, push it to this.occasionIncludes
	    };

	    // filter by food
	    this.foodFilter = function() {
	    	if (this.foodIncludes.length > 0 ) {
	    		
	    	};
	    };
	    // filter by occasion
	    this.occasionFilter = function() {
	    	if (this.occasionIncludes.length > 0 ) {
	    		
	    	};
	    };

    });    
})();