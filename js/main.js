var tictactoeApp = angular.module('tictactoeApp', ["firebase"]);

tictactoeApp.controller('tttController', ["$scope", "$firebase", function ($scope, $firebase) {

	// this is creating new Firebase connection using the Firebase object
	var ref = new Firebase("https://tictacboo.firebaseio.com/");
	//pass the firebase connection/object to angularfire
	var sync = $firebase(ref); // enables the firebase binding

	
	// //firebase push 
	// squares: [],
	// player: true,
	// winner: null,
	// startGame: false
//connect to firebase (ref) + add to angular fire ($firebase)
//index of all TTT games
//evaluate the index to see if any games have start game==false



//Design pattern he recommends:
//
// var initialDB = {
// 	address: "On Broadway",
// 	hours: "9 to 5",
// 	gameInProgress: true,
// };

// var firebase = new Firebase("http://donutshoppe.firebaseio.com/")
// var storeDetails = $firebase(firebase);
// var storeDetailsObject = storeDetails.$asObject();

// storeDetailsObject.$bindTo($scope, 'storeDetails')
// 	.then(function() {
// 	  //GUARANTEED that $scope.storeDetails exists!
// 	if (!$scope.storeDetails.gameInProgress) {
// 	  $scope.storeDetails = initialDB;

// 	  // Example of dynamically adding to a possibly empty cells array
// 	  $scope.storeDetails.cells = $scope.storeDetails.cells || new Array();
// 	  $scope.storeDetails.cells.push("new string");
// 	}
// });







	// ref.syn.$bindTo($scope, "cells2");
	// $scope.$watch(cells2, function (){
	// 		console.log("Hello");            

	// create empty array of each div/squares for indexing purpose
	$scope.squares = ["","","","","","","","",""];
	// declared a variable in order to switch from Player 1 to Player 2
	var playerOne = true;

	//function to identify which squares the player (1 or 2) selected
	//$scope is an object & we are assigning a property called placeMarker & the value is function
	//squaresindex is a argument for the function
	$scope.placeMarker = function(squaresindex) {
		// if the squaresindex is == ""   ("" has a value is empty string, not undefined
		if ($scope.squares[squaresindex] == "") {
			if (playerOne == true) {
				$scope.squares[squaresindex] = 1;
				winConditions();
				//	$scope.image  ///boo=true   ng-click="s='X'"
			} else {
				$scope.squares[squaresindex] = -1;
				winConditions();
			// place image
			}
		} else {
			alert("This square is already taken");
		}
	}

	//function to check winning conditions after each player selected and to switch players
	function winConditions() {
		if (($scope.squares[0] == 1 && $scope.squares[1] == 1 && $scope.squares[2] == 1) || 
		($scope.squares[3] == 1 && $scope.squares[4] == 1 && $scope.squares[5] == 1) ||
		($scope.squares[6] == 1 && $scope.squares[7] == 1 && $scope.squares[8] == 1) ||
		($scope.squares[0] == 1 && $scope.squares[3] == 1 && $scope.squares[6] == 1) ||
		($scope.squares[1] == 1 && $scope.squares[4] == 1 && $scope.squares[7] == 1) ||
		($scope.squares[2] == 1 && $scope.squares[5] == 1 && $scope.squares[8] == 1) ||
		($scope.squares[0] == 1 && $scope.squares[4] == 1 && $scope.squares[8] == 1) ||
		($scope.squares[2] == 1 && $scope.squares[4] == 1 && $scope.squares[6] == 1)) {
			alert("Player 1 Wins!");
		} else if (
			($scope.squares[0] == -1 && $scope.squares[1] == -1 && $scope.squares[2] == -1) || 
			($scope.squares[3] == -1 && $scope.squares[4] == -1 && $scope.squares[5] == -1) ||
			($scope.squares[6] == -1 && $scope.squares[7] == -1 && $scope.squares[8] == -1) ||
			($scope.squares[0] == -1 && $scope.squares[3] == -1 && $scope.squares[6] == -1) ||
			($scope.squares[1] == -1 && $scope.squares[4] == -1 && $scope.squares[7] == -1) ||
			($scope.squares[2] == -1 && $scope.squares[5] == -1 && $scope.squares[8] == -1) ||
			($scope.squares[0] == -1 && $scope.squares[4] == -1 && $scope.squares[8] == -1) ||
			($scope.squares[2] == -1 && $scope.squares[4] == -1 && $scope.squares[6] == -1)) {
				alert("Player 2 Wins");
		} else if (($scope.squares[0] == 1 || -1) && ($scope.squares[1] == 1 || -1) && 
			($scope.squares[2] == 1 || -1) && ($scope.squares[3] == 1 || -1) && 
			($scope.squares[4] == 1 || -1) && ($scope.squares[5] == 1 || -1) &&
			($scope.squares[6] == 1 || -1) && ($scope.squares[7] == 1 || -1) &&
			($scope.squares[8] == 1 || -1)) {
				console.log("It's a tie!");
		}
			if (playerOne == true) {
				playerOne = false; 
			}
			else {
				playerOne = true;// =assigns; ==evaluates
			}
	}
}]);