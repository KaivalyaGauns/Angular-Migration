angular
  .module("codecraft")
  .directive("myAvatar", function() {
    return {
      restrict: "AE",
      templateUrl: "../templates/avatar.html",
      scope:{},
      controller: ["$scope", function($scope) {
        $scope.img = "avatar.png"
      }]
    };
  });
