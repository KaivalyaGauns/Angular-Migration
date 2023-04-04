angular
  .module("codecraft")
  .directive("extraDetails", function() {
    return {
      restrict: "AE",
      templateUrl: "../templates/details.html",
      scope:{},
      controller: ["$scope", "DataService", function($scope, DataService) {
        // $scope.data = {
        //   name: "Kai",
        //   age: 21
        // }
        $scope.data = DataService;
        $scope.changeData = function(new_data) {DataService.setData(new_data)};
      }]
    };
  });
