"use strict";
// ignore these lines for now
// just know that the variable 'color' will end up with a random value from the colors array
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var message;

switch (color) {
	// todo: create a case statement that will handle every color except indigo and violet
    // todo: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.

    // todo: create a default case that will catch indigo and violet
    // todo: for the default case, log: I do not know anything by that color.

	case "red":
		message = "Red is the color";
		break;
	case "orange":
		message = "Orange is the color";
		break;
	case "yellow":
		message = "Yellow is the color";
		break;
	case "green":
		message = "Green is the color";
		break
	case "blue":
		message = "Blue is the color";
		break;
	default:
		message = "I don't know about that color";

}

console.log(message);