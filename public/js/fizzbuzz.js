"use strict";
// Fizz Buzz using a Loop
//
// for (var i=1; i<=100; i++) {
// 	if (i % 3 == 0 && i % 5 == 0) {
// 		console.log("fizzbuzz");
// 	} else if (i % 3 == 0) {
// 		console.log("fizz");
// 	} else if (i % 5 == 0) {
// 		console.log("buzz");
// 	} else {
// 		console.log(i);
// 	}
// }

// Fizz Buzz using Recursion
//
function fizzBuzz (i) {
	if (i % 15 == 0) {
		console.log("fizzbuzz");
	} else if (i % 3 == 0) {
		console.log("fizz");
	} else if (i % 5 == 0) {
		console.log("buzz");
	} else {
		console.log(i);
	}
	i++;
	if (i <= 100) {
		fizzBuzz(i);
	}
}

fizzBuzz (1);