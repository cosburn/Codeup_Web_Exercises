"use strict";

//global variables
var numButtons = document.getElementsByClassName("num");
var opButtons = document.getElementsByClassName("op");
var inputFields = document.getElementsByTagName("input");
var leftOp = "";
var operator = "";
var rightOp = "";
var answer;

//math functions

function plus() {
	answer = +leftOp + +rightOp;
	console.log(leftOp + " + " + rightOp + " = " +answer);
	clear();
	leftOp = answer;
	document.getElementById("left-operand").value = leftOp;
}
function minus() {
	answer = +leftOp - +rightOp;
	console.log(leftOp + " - " + rightOp + " = " +answer);
	clear();
	leftOp = answer;
	document.getElementById("left-operand").value = leftOp;
}
function multiply() {
	answer = +leftOp * +rightOp;
	console.log(leftOp + " * " + rightOp + " = " +answer);
	clear();
	leftOp = answer;
	document.getElementById("left-operand").value = leftOp;
}
function divide() {
	answer = +leftOp / +rightOp;
	console.log(leftOp + " / " + rightOp + " = " +answer);
	clear();
	leftOp = answer;
	document.getElementById("left-operand").value = leftOp;
}

//event listener functions

function numButtonListener(e) {
	if (operator) {
		rightOp+=this.innerHTML;
		document.getElementById("right-operand").value = rightOp;
	} else {
		if (leftOp == answer) {
			clear();
		}
		leftOp+=this.innerHTML;
		document.getElementById("left-operand").value = leftOp;
	}
}
function opButtonListener(e) {
	operator = this.innerHTML;
	document.getElementById("operator").value = operator;
}
function equalsListener(e) {
	if (rightOp) {
		if (operator == "+") {
			plus();
		} else if (operator == "-") {
			minus();
		} else if (operator == "*") {
			multiply();
		} else if (operator == "/") {
			divide();
		}
	}
}
function clear() {
	leftOp = "";
	rightOp = "";
	operator = "";
	for (var i=0; i<inputFields.length; i++) {
		inputFields[i].value = "";
	}
}

//add event listeners to buttons

for (var i=0; i<numButtons.length; i++) {
	numButtons[i].addEventListener("click", numButtonListener, false);
}

for (var i=0; i<opButtons.length; i++) {
	opButtons[i].addEventListener("click", opButtonListener, false);
}

document.getElementById("equals-button").addEventListener("click", equalsListener, false);

document.getElementById("clear-button").addEventListener("click", clear, false);






