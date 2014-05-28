angular.module("sportsStore")
	.controller("sportsStoreCtrl", function($scope){

		$scope.data = {
			products: [
				{ name: "Product A",
				  description: "something about A", 
				  category: "some cat",
				  price: "$100" },
				{ name: "Product B",
				  description: "something about B", 
				  category: "another cat",
				  price: "$99.99" }
			]
		};

	});