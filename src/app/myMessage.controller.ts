import * as angular from "angular";
angular
  .module("codecraft")
  .controller("myMessage", ["$scope", function(
    $scope
  ) {
    $scope.message = "HELLO WORLD!";
  }])
