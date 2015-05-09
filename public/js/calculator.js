"use strict";

//global variables
var numButtons = document.getElementsByClassName("num");
var opButtons = document.getElementsByClassName("op");
var inputFields = document.getElementsByTagName("input");
var leftOp = "";
var operator = "";
var rightOp = "";
var answer;

//math functions, solve and clear functions

function plus() {
	answer = +leftOp + +rightOp;
	console.log(leftOp + " + " + rightOp + " = " + answer);
	clear();
	leftOp = answer;
	document.getElementById("left-operand").value = leftOp;
}
function minus() {
	answer = +leftOp - +rightOp;
	console.log(leftOp + " - " + rightOp + " = " + answer);
	clear();
	leftOp = answer;
	document.getElementById("left-operand").value = leftOp;
}
function multiply() {
	answer = +leftOp * +rightOp;
	console.log(leftOp + " X " + rightOp + " = " + answer);
	clear();
	leftOp = answer;
	document.getElementById("left-operand").value = leftOp;
}
function divide() {
	answer = +leftOp / +rightOp;
	console.log(leftOp + " / " + rightOp + " = " + answer);
	clear();
	leftOp = answer;
	document.getElementById("left-operand").value = leftOp;
}
function makePercent() {
	if (rightOp) {
		var changedNum = +rightOp / 100;
		console.log(rightOp + " as a percent is " + changedNum);
		rightOp = changedNum;
		document.getElementById("right-operand").value = changedNum;
	} else {
		var changedNum = +leftOp / 100;
		console.log(leftOp + " as a percent is " + changedNum);
		clear();
		leftOp = changedNum;
		document.getElementById("left-operand").value = changedNum;
	}
}
function changeSign() {
	if (rightOp) {
		var changedNum = -(+rightOp);
		console.log("the opposite of " + rightOp + " is " + changedNum);
		rightOp = changedNum;
		document.getElementById("right-operand").value = changedNum;
		console.log("right");
	} else {
		console.log("no right");
		changedNum = -(+leftOp);
		console.log("the opposite of " + leftOp + " is " + changedNum);
		clear();
		leftOp = changedNum;
		document.getElementById("left-operand").value = leftOp;
	}
	
}

// other button functions

function solve() {
	if (rightOp) {
		if (operator == "+") {
			plus();
		} else if (operator == "-") {
			minus();
		} else if (operator == "X") {
			multiply();
		} else if (operator == "/") {
			divide();
		} 
	}
}
function changeInput() {
	if (operator == "%") {
			makePercent();
		} else if (operator == "+ / -") {
			changeSign();
		}
}
function clear() {
	leftOp = "0";
	rightOp = "";
	operator = "";
	for (var i=0; i<inputFields.length; i++) {
		inputFields[i].value = "";
	}
	inputFields[0].value = leftOp;
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
		if (leftOp == 0) {
			leftOp = "";
		}
		leftOp+=this.innerHTML;
		document.getElementById("left-operand").value = leftOp;
	}
	e.preventDefault();
}
function opButtonListener(e) {
	operator = this.innerHTML;
	console.log(operator);
	if ((operator == "%") || (operator == "+ / -")) {
		changeInput();
		operator = document.getElementById("operator").value;
		console.log("changed op back to " + operator);
	} else {
		console.log('CHANGING OPERATOR');
		document.getElementById("operator").value = operator;
		solve();
	}
	e.preventDefault();
}
function equalsListener(e) {
	solve();
	e.preventDefault();
}
function clearListener(e) {
	clear();
	e.preventDefault();
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






