var valApp = angular.module('valApp', []);
valApp.controller('form1Ctrl', function($scope) {
	$scope.submitForm1 = function() {
		localStorage.username = $scope.usr;
	};
});

var homeApp = angular.module('homeApp', []);
// create angular controller
homeApp.controller('goalCtrl', function($scope) {
	//appending username
	$scope.homeName = function() {
		$scope.user = localStorage.username;
	};
	//adding items to the list
	$scope.submitForm = function() {
		if ($scope.list != null) {
			if ($scope.one == null) {
				alert('Congrats, Item one has been updated');
				$scope.one = $scope.list;
				localStorage.e1 = $scope.one;
				$scope.one = localStorage.e1;
				$scope.list = null;
				localStorage.e1 = $scope.one;
				s$scope.one = localStorage.e1;
				return false;
			}
			if ($scope.two == null) {
				alert('Congrats, Item two has been updated');
				$scope.two = $scope.list;
				$scope.list = null;
				return false;
			}
			if ($scope.three == null) {
				alert('Congrats, Item three has been updated');
				$scope.three = $scope.list;
				$scope.list = null;
				return false;
			}
			if ($scope.four == null) {
				alert('Congrats, Item four has been updated');
				$scope.four = $scope.list;
				$scope.list = null;
				return false;
			}
			if ($scope.five == null) {
				alert('Congrats, Item five has been updated');
				$scope.five = $scope.list;
				$scope.list = null;
				return false;
			}
			if ($scope.six == null) {
				alert('Congrats, Item six has been updated');
				$scope.six = $scope.list;
				$scope.list = null;
				return false;
			}
			if ($scope.seven == null) {
				alert('Congrats, Item seven has been updated');
				$scope.seven = $scope.list;
				$scope.list = null;
				return false;
			}
			if ($scope.eight == null) {
				alert('Congrats, Item eight has been updated');
				$scope.eight = $scope.list;
				$scope.list = null;
				return false;
			}
			if ($scope.nine == null) {
				alert('Congrats, Item nine has been updated');
				$scope.nine = $scope.list;
				$scope.list = null;
				return false;
			}
			if ($scope.ten == null) {
				alert('Congrats, Item ten has been updated');
				$scope.ten = $scope.list;
				$scope.list = null;
				return false;
			}
			alert('Oh men, your bucket is full. Please delete some items to continue');
		}
	};

	//editing the bucket list
	$scope.edit1 = function() {
		if ($scope.one != null) {
			$scope.list = $scope.one;
			alert('You can now edit item one');
			$scope.one = null;
		}
	};
	$scope.edit2 = function() {
		if ($scope.two != null) {
			$scope.list = $scope.two;
			alert('You can now edit item two');
			$scope.two = null;
		}
	};
	$scope.edit3 = function() {
		if ($scope.three != null) {
			$scope.list = $scope.three;
			alert('You can now edit item three');
			$scope.three = null;
		}
	};
	$scope.edit4 = function() {
		if ($scope.four != null) {
			$scope.list = $scope.four;
			alert('You can now edit item one');
			$scope.four = null;
		}
	};
	$scope.edit5 = function() {
		if ($scope.five != null) {
			$scope.list = $scope.fiv;
			alert('You can now edit item five');
			$scope.one = null;
		}
	};
	$scope.edit6 = function() {
		if ($scope.six != null) {
			$scope.list = $scope.six;
			alert('You can now edit item six');
			$scope.one = null;
		}
	};
	$scope.edit7 = function() {
		if ($scope.seven != null) {
			$scope.list = $scope.seven;
			alert('You can now edit item seven');
			$scope.seven = null;
		}
	};
	$scope.edit8 = function() {
		if ($scope.eight != null) {
			$scope.list = $scope.eight;
			alert('You can now edit item eight');
			$scope.eight = null;
		}
	};
	$scope.edit9 = function() {
		if ($scope.nine != null) {
			$scope.list = $scope.nine;
			alert('You can now edit item nine');
			$scope.nine = null;
		}
	};
	$scope.edit10 = function() {
		if ($scope.ten != null) {
			$scope.list = $scope.ten;
			alert('You can now edit item ten');
			$scope.ten = null;
		}
	};
	//deleting items in the list
	$scope.delete1 = function() {
		if ($scope.one != null) {
			$scope.one = null;
			alert('Item one has been deleted');
		}
	};
	$scope.delete2 = function() {
		if ($scope.two != null) {
			$scope.two = null;
			alert('Item two has been deleted');
		}
	};
	$scope.delete3 = function() {
		if ($scope.three != null) {
			$scope.three = null;
			alert('Item three has been deleted');
		}
	};
	$scope.delete4 = function() {
		if ($scope.four != null) {
			$scope.four = null;
			alert('Item four has been deleted');
		}
	};
	$scope.delete5 = function() {
		if ($scope.five != null) {
			$scope.five = null;
			alert('Item five has been deleted');
		}
	};
	$scope.delete6 = function() {
		if ($scope.one != null) {
			$scope.six = null;
			alert('Item six has been deleted');
		}
	};
	$scope.delete7 = function() {
		if ($scope.seven != null) {
			$scope.seven = null;
			alert('Item seven has been deleted');
		}
	};
	$scope.delete8 = function() {
		if ($scope.eight != null) {
			$scope.eight = null;
			alert('Item eight has been deleted');
		}
	};
	$scope.delete9 = function() {
		if ($scope.nine != null) {
			$scope.nine = null;
			alert('Item nine has been deleted');
		}
	};
	$scope.delete10 = function() {
		if ($scope.ten != null) {
			$scope.ten = null;
			alert('Item ten has been deleted');
		}
	};
});
