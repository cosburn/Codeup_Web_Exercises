"use strict";

do {

	var random = Math.floor((Math.random()*10)+1);
	var guess = prompt("Guess a number between 1 and 10");

	while (true) {

		if (guess == random) {
			alert("YOU GOT IT OMG");
			break;
		} else {
			var message = (guess > random) ? "Too high, guess again!" : "Too low, guess again!";
			guess = prompt(message);
		}
	}

} while (confirm("Play again?"))

alert('thanks for playing');