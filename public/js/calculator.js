"use strict";

//global variables

var numButtons = document.getElementsByClassName("num");
var opButtons = document.getElementsByClassName("op");
var inputFields = document.getElementsByTagName("textarea");
var leftOp = "";
var operator = "";
var tempOperator;
var rightOp = "";
var answer;

//percent and negative/positive functions

function makePercent() {
	if (rightOp) {
		var changedNum = +rightOp / 100;
		console.log(rightOp + " as a percent is " + changedNum);
		rightOp = changedNum;
		document.getElementById("left-operand").value = leftOp+" "+operator+" "+rightOp;
	} else {
		var changedNum = +leftOp / 100;
		console.log(leftOp + " as a percent is " + changedNum);
		clear();
		leftOp = changedNum;
		document.getElementById("left-operand").value = leftOp;
	}
}
function changeSign() {
	if (rightOp) {
		var changedNum = -(+rightOp);
		rightOp = changedNum;
		document.getElementById("left-operand").value = leftOp+" "+operator+" "+rightOp;
	} else {
		changedNum = -(+leftOp);
		clear();
		leftOp = changedNum;
		document.getElementById("left-operand").value = leftOp;
	}
	
}

// other button functions

function solve() {
	if (rightOp) {
		if (operator == "+") {
			answer = +leftOp + +rightOp;
		} else if (operator == "-") {
			answer = +leftOp - +rightOp;
		} else if (operator == "x") {
			answer = +leftOp * +rightOp;
		} else if (operator == "/") {
			answer = +leftOp / +rightOp;
		} 
		clear();
		leftOp = answer;
		document.getElementById("left-operand").value = leftOp+" "+operator+" "+rightOp;
	}
}
function changeInput() {
	if (tempOperator == "%") {
			makePercent();
		} else if (tempOperator == "+ / -") {
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
		document.getElementById("left-operand").value = leftOp+" "+operator+" "+rightOp;
	} else {
		if (leftOp == answer) {
			clear();
		}
		if (leftOp == 0) {
			leftOp = "";
		}
		leftOp+=this.innerHTML;
		document.getElementById("left-operand").value = leftOp+" "+operator+" "+rightOp;
	}
	e.preventDefault();
}
function opButtonListener(e) {
	tempOperator = this.innerHTML;
	console.log(operator);
	if ((tempOperator == "%") || (tempOperator == "+ / -")) {
		changeInput();
		console.log("changed op back to " + operator);
	} else {
		operator = this.innerHTML;
		console.log('CHANGING OPERATOR');
		document.getElementById("left-operand").value = leftOp+" "+operator+" "+rightOp;
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






