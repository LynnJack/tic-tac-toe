var tictactoeApp = angular.module('tictactoeApp', ["firebase"]);

tictactoeApp.controller('tttController', ["$scope", "$firebase", function ($scope, $firebase) {


	//var ref = $firebase(new Firebase("https://<your-firebase>.firebaseio.com/data "));
	// var refsync = ref.$asObject();
	// ref.syn.$bindTo($scope, "cells2");
	// $scope.$watch(cells2, function (){
	// 		console.log("Hello");            

	// create empty array of each div/square for indexing purpose
	$scope.squares = ["","","","","","","","",""];
	// declared a variable in order to switch from Player 1 to Player 2
	var playerOne = true;

	//function to identify which square the player (1 or 2) selected
	function placeMarker(squareindex) {
		if (playerOne == true) {
			$scope.square[squareindex] = 1;
			//	$scope.image  ///boo=true   ng-click="s='X'"
		} else {
			$scope.square[squareindex] = -1;
		// place image

		};
	}

	//function to check winning conditions after each player selected and to switch players
	function winConditions() {
		if (($scope.square[0] == 1 && $scope.square[1] == 1 && $scope.square[2] == 1) || 
		($scope.square[3] == 1 && $scope.square[4] == 1 && $scope.square[5] == 1) ||
		($scope.square[6] == 1 && $scope.square[7] == 1 && $scope.square[8] == 1) ||
		($scope.square[0] == 1 && $scope.square[3] == 1 && $scope.square[6] == 1) ||
		($scope.square[1] == 1 && $scope.square[4] == 1 && $scope.square[7] == 1) ||
		($scope.square[2] == 1 && $scope.square[5] == 1 && $scope.square[8] == 1) ||
		($scope.square[0] == 1 && $scope.square[4] == 1 && $scope.square[8] == 1) ||
		($scope.square[2] == 1 && $scope.square[4] == 1 && $scope.square[6] == 1)) 
			console.log("Player 1 Wins!");
		else if (
			($scope.square[0] == -1 && $scope.square[1] == -1 && $scope.square[2] == -1) || 
		($scope.square[3] == -1 && $scope.square[4] == -1 && $scope.square[5] == -1) ||
		($scope.square[6] == -1 && $scope.square[7] == -1 && $scope.square[8] == -1) ||
		($scope.square[0] == -1 && $scope.square[3] == -1 && $scope.square[6] == -1) ||
		($scope.square[1] == -1 && $scope.square[4] == -1 && $scope.square[7] == -1) ||
		($scope.square[2] == -1 && $scope.square[5] == -1 && $scope.square[8] == -1) ||
		($scope.square[0] == -1 && $scope.square[4] == -1 && $scope.square[8] == -1) ||
		($scope.square[2] == -1 && $scope.square[4] == -1 && $scope.square[6] == -1)) {
				console.log("Player 2 Wins");
		}
		else if (($scope.square[0] == 1 || -1) && ($scope.square[1] == 1 || -1) && 
			($scope.square[2] == 1 || -1) && ($scope.square[3] == 1 || -1) && 
			($scope.square[4] == 1 || -1) && ($scope.square[5] == 1 || -1) &&
			($scope.square[6] == 1 || -1) && ($scope.square[7] == 1 || -1) &&
			($scope.square[8] == 1 || -1)) {
				console.log("It's a tie!");
		} else {
			if (playerOne == true) {
				playerOne == false; 
			}
			else {
				playerOne == true;
			}
		};
	}
}]);