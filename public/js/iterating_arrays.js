"use strict";

// todo:
// Create an array of 4 names using literal array notation, in a variable called 'names'.

// todo:
// Create a log statement that will log the number of elements in the names array.

// todo:
// Create log statements that will print each of the names array elements individually.

(function(){
	var catNames = ["Nina","Whiskers","Sophia","Skamps"];

	console.log(catNames.length);

	for (var i=0;i<catNames.length;i++){
		console.log(catNames[i] + " in the for loop!");
	}

	catNames.forEach(function (name,index,array) {
		console.log(name + " at index " + index + " in the forEach loop!");
	})

})();