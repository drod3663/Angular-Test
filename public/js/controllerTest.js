(function() {
	"use strict";

	var app = angular.module("controllerTest", []);

	app.controller("CartController", function() {

		this.newItem = [];
		this.myList = [
			{
				title: "Apple",
				price: 1.00
			},
			{	title: "Banana",
				price: 1.00
			},
			{
				title: "Watermelon",
				price: 2.00
			}
		];
	});

})();