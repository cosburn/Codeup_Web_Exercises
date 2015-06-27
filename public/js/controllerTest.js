"use strict";
(function() {
	var app = angular.module("controllerTest",[]);

	app.controller("CartController", function() {
		this.store = [
			{ 
				icon:   "http://placehold.it/100x100",
				name:   "PANTS",
				price:  "$30.99",
				qty:    1
			},
			{
				icon:   "http://placehold.it/100x100",
				name:   "SHIRT",
				price:  "$15.99",
				qty:    1
			}
		];

		this.cart = [];

		this.addItem = function(item) {
			var exists;
			this.cart.forEach(function(e, i) {
				if (e == item) {
					exists = true;
				};
			});
			if (exists == true) {
				var that = this;
				this.cart.forEach(function(e, i) {
					if (e == item) {
						that.cart[i].qty++;
					};
				});
			} else {
				this.cart.push(item);
			};			
		};

		this.removeItem = function(index) {
			this.cart[index].qty == 1;
			this.cart.splice(index,1);
			console.log(this.cart);
		};
	});

})();