"use strict";

$(document).ready(function() {
	$("#main-header").click(function() {
		$(this).css("background-color","blue");
	});
	$("p").dblclick(function() {
		$(this).css("font-size","18px");
	});
	$("li").hover(
		function() {
			$(this).css("color","red");
		},
		function() {
			$(this).css("color","#fff");
		}
	);
});

