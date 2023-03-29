angular
  .module("codecraft")
  .controller("myMessageController",["$scope", function(
    $scope
  ) {
    $scope.message = "HELLO WORLD!";
  }]);
