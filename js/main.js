var tictactoeApp = angular.module('tictactoeApp', ["firebase"]);
tictactoeApp.controller('tttController', ["$scope", "$firebase", function ($scope, $firebase) {
	// this is creating new Firebase connection using the Firebase object
	var ref = new Firebase("https://tictacboo.firebaseio.com/");
	//pass the firebase connection/object to angularfire
	var sync = $firebase(ref); // enables the firebase binding
	var firebase = sync.$asObject();
	firebase.$bindTo($scope, 'db').then(function(){
		$scope.db = newGame;
	})

	var newGame = {
 		squares: ["","","","","","","","",""],
 		players: ["playerOne", "playerTwo"],
 		gameInProgress: "true",
	};

	// if (!$scope.db.gameInProgress) {
	//  	  $scope.db = newGame;
	//   $scope.db.squares = $scope.db.squares || new Array();
 // 	  $scope.db.squares.push("new string");
 // 	}
 // });

// 	  // Example of dynamically adding to a possibly empty cells array
// 	  $scope.storeDetails.cells = $scope.storeDetails.cells || new Array();
// 	  $scope.storeDetails.cells.push("new string");
// 	}
// });            

	$scope.squares = ["","","","","","","","",""];
	// declared a variable in order to switch from Player 1 to Player 2
	var playerOne = true;
	//function to identify which squares the player (1 or 2) selected
	$scope.placeMarker = function(squaresindex) {
		if ($scope.squares[squaresindex] == "") {
			if (playerOne == true) {
				$scope.squares[squaresindex] = 1;
				winConditions();
			} else {
				$scope.squares[squaresindex] = -1;
				winConditions();
			}
		} else {
			alert("This square is already taken");
		}
	}



	function winConditions() {
		if (($scope.squares[0] == 1 && $scope.squares[1] == 1 && $scope.squares[2] == 1) || 
		($scope.squares[3] == 1 && $scope.squares[4] == 1 && $scope.squares[5] == 1) ||
		($scope.squares[6] == 1 && $scope.squares[7] == 1 && $scope.squares[8] == 1) ||
		($scope.squares[0] == 1 && $scope.squares[3] == 1 && $scope.squares[6] == 1) ||
		($scope.squares[1] == 1 && $scope.squares[4] == 1 && $scope.squares[7] == 1) ||
		($scope.squares[2] == 1 && $scope.squares[5] == 1 && $scope.squares[8] == 1) ||
		($scope.squares[0] == 1 && $scope.squares[4] == 1 && $scope.squares[8] == 1) ||
		($scope.squares[2] == 1 && $scope.squares[4] == 1 && $scope.squares[6] == 1)) {
			$scope.boowins=true;
		} else if (
			($scope.squares[0] == -1 && $scope.squares[1] == -1 && $scope.squares[2] == -1) || 
			($scope.squares[3] == -1 && $scope.squares[4] == -1 && $scope.squares[5] == -1) ||
			($scope.squares[6] == -1 && $scope.squares[7] == -1 && $scope.squares[8] == -1) ||
			($scope.squares[0] == -1 && $scope.squares[3] == -1 && $scope.squares[6] == -1) ||
			($scope.squares[1] == -1 && $scope.squares[4] == -1 && $scope.squares[7] == -1) ||
			($scope.squares[2] == -1 && $scope.squares[5] == -1 && $scope.squares[8] == -1) ||
			($scope.squares[0] == -1 && $scope.squares[4] == -1 && $scope.squares[8] == -1) ||
			($scope.squares[2] == -1 && $scope.squares[4] == -1 && $scope.squares[6] == -1)) {
				$scope.buddywins=true;
		// add reset game
		} else if (
			($scope.squares[0] == 1 || $scope.squares[0] == -1) && ($scope.squares[1] == 1 || $scope.squares[1] == -1) && 
		 	($scope.squares[2] == 1 || $scope.squares[2] == -1) && ($scope.squares[3] == 1 || $scope.squares[3] == -1) && 
		 	($scope.squares[4] == 1 || $scope.squares[4] == -1) && ($scope.squares[5] == 1 || $scope.squares[5] == -1) &&
		 	($scope.squares[6] == 1 || $scope.squares[6] == -1) && ($scope.squares[7] == 1 || $scope.squares[7] == -1) &&
		 	($scope.squares[8] == 1 || $scope.squares[8] == -1)) {
		 		$scope.itsatie=true;
		 }
		/*for (var i = 0; i = $scope.squares.length; i++);
 			if ($scope.squares !== [""]) {
 				console.log("Boo & Buddy Win!");
 			}*/

			if (playerOne == true) {
				playerOne = false; 
			}
			else {
				playerOne = true;// =assigns; ==evaluates
				}
	}
}]);