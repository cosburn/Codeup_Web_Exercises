"use strict";

(function() {
    var app = angular.module("searchModule", []);

    app.controller("SearchController", function() {
	    // Create variables to hold rating and average values
    	this.restaurants = [];

        var that = this;
    	//get data
    	this.getRestaurants = function() {
	        var getRestaurants = $.get("/data/restaurants.json");

	        getRestaurants.done(function(data){
	        	data.forEach(function(restaurant) {
	    			//create new properties for restaurants
	        		restaurant.vegFriendlinessAverage = 0;
	        		restaurant.deliciousnessAverage = 0;

	        		//calculate average for ratings
	        		that.getAverage(restaurant);
	        		//add each restaurant to array this.restaurants
	        		that.restaurants.push(restaurant);
	        		console.log("restaurants = " + that.restaurants);
	        	});
	        });
	        
			//if ajax requests fails (takes two parameters, second identifies issue)
	        getRestaurants.fail(function(jqxh, status){
	        	console.log(status);
	        	console.log("failed");
	        });
	    };

    	//calculate average of 1 - 5 ratings
        this.getAverage = function(restaurant) {
        	// loop through reviews in restaurant
        	restaurant.reviews.forEach(function(review){

        		// calculate averages
        		console.log(restaurant.name + " VF = " + review.vegfriendliness);
        		restaurant.vegFriendlinessAverage = (restaurant.vegFriendlinessAverage + review.vegfriendliness);
        		restaurant.deliciousnessAverage += review.deliciousness;

        		// console.log(restaurant.name + "VF average: " + restaurant.vegFriendlinessAverage);

        		// assign values to restaurant properties
        		restaurant.vegFriendlinessAverage = Math.round((restaurant.vegFriendlinessAverage / restaurant.reviews.length));
        		restaurant.deliciousnessAverage = Math.round((restaurant.deliciousnessAverage / restaurant.reviews.length));
        	});
        };
    });    
})();