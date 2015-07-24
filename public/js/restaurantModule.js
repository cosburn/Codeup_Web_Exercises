"use strict";

(function() {
    var app = angular.module("restaurantModule", []);

    app.controller("RestaurantController", ['$scope', '$http', function($scope, $http) {


	   // GET RESTAURANT DATA ========================================================================


	   // Create variable to hold rating and average values
    	$scope.restaurants = [];
    	$scope.foodTypes = [];
    	var that = this;

    	// get data
        var getRestaurants = $http.get("data/restaurants.json").
        	success(function(data, status, headers, config) {
        		$scope.restaurants = data;
        	}).
        	error(function(data, status, headers, config){
        		console.log(status);
	        	console.log("request failed");
        	});

        var getFoodTypes = $http.get("data/foodTypes.json").
        	success(function(data, status, headers, config) {
        		$scope.foodTypes = data;
        	}).
        	error(function(data, status, headers, config){
        		console.log(status);
	        	console.log("request failed");
        	});


        // CALCULATE RATING AVERAGES/PERCENTS =========================================================


	    // calculate average of 1 - 5 ratings
	    this.getAverage = function(restaurant, rating) {
	    	var average = 0;
        	restaurant.reviews.forEach(function(review){
        		// console.log(average + "+=" + review[rating] + "=");
        		average += parseInt(review[rating]);
        		// console.log("average = "+average);
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


	    // FILTERS =====================================================================================


	    // create new array to put all the things that fit the categories checked
	    $scope.foodIncludes = [];
	    // this.occasionIncludes = [];

	    // add [category] to this.[category]Includes when that box is checked
	    this.includeFood = function(food) {
	    	//iterate through restaurants to check food types
	    	var i = $.inArray(food, $scope.foodIncludes);
	    	if (i > -1) {
	    		//if the food is already included, remove it (unchecked)
	    		$scope.foodIncludes.splice(i,1);
	    	} else {
	    		//if not included, add it (checked)
	    		$scope.foodIncludes.push(food);
	    	};
	    };
	    // this.includeOccasion = function(occasion) {
	    // 	//iterate through restaurants.reviews["occasion"]
	    // 	//if the item in the array matches input occasion parameter, push it to this.occasionIncludes
	    // };

	    // filter by food type selected
	    this.foodFilter = function(restaurants) {
	    	console.log("array = " + $scope.foodIncludes);
	    	if ($scope.foodIncludes.length > 0 ) {
	    		if ($.inArray(restaurants["food"], $scope.foodIncludes) < 0) {
	    			console.log('filtering by ' + restaurants["food"]);
	    			return;
	    		};
	    	};
	    	return restaurants;
	    };

	    // filter by occasion type selected
	    // this.occasionFilter = function() {
	    // 	if (this.occasionIncludes.length > 0 ) {
	    		
	    // 	};
	    // };

	    

	    // GOOGLE MAPS CONTROLS =========================================================================


	    //new instance of the Geocode() object
		var geocoder = new google.maps.Geocoder();

		//after window loads, initialize google map
		this.initMap = function(restaurant,containerId) {
			
			geocoder.geocode( {"address":restaurant['address']}, function(results,status) {
				console.log(restaurant);
				//check for a successful result
				if (status == google.maps.GeocoderStatus.OK) {
					
					console.log(results[0].geometry.location);

					//set map options
					var mapOptions = {
						zoom: 12,
						center: {
							lat: results[0].geometry.location.A, 
							lng: results[0].geometry.location.F
						}
					}

					var map = new google.maps.Map(document.getElementById(containerId), mapOptions);
					map.setCenter(results[0].geometry.location)

					//create marker
					var marker = new google.maps.Marker({
						position: results[0].geometry.location,
						map: map,
						animation: google.maps.Animation.DROP,
					});	

					
				} else {
					alert("Geocoding was not successful. Status: " + status);
				}
			});
		};


		// REVIEW CONTROLS ===============================================================================


		this.addNew = function() {
			//object to hold new review
			// that.newReview = {
			// 	"name":             "",
			// 	"vegfriendliness":  0,
			// 	"deliciousness":    0
			// };
			that.newRest = true;
		};

		this.submitReview = function(reviewedRestaurant) {
			console.log(reviewedRestaurant);
			$scope.restaurants.forEach(function(restaurant) {
				if (restaurant['name'] == reviewedRestaurant) {
					restaurant['reviews'].push(that.newReview);
					console.log(restaurant['reviews']);
				};
			});
			that.reviewSubmitted = true;
		};
		
    }]);

    // app.controller("MapController", ["RestaurantController",'$scope', '$http', function($scope, $http) {
    // 	//loads map with location of restaurant for single restaurant view
    // }]);
	
    //filter restaurants by name
    app.filter('nameOfRestaurant', function() {
       	return function(restaurants, name) {
    		var filtered = [];
    		restaurants.forEach(function(restaurant) {
    			if (restaurant['name'] == name) {
    				filtered.push(restaurant);
    			};
    		});
    		return filtered;
    	};
    });    
})();