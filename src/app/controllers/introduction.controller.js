angular
  .module("codecraft")
  .controller("introductionController", ["$scope","DataService", function(
    $scope,
    DataService
  ) {
    $scope.data = DataService;
  }]);