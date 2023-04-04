angular
  .module("codecraft")
  .controller("myPetController", ["$scope", function($scope) {
    $scope.petType = "Cat";
    $scope.petName = "Ginger";
  }])