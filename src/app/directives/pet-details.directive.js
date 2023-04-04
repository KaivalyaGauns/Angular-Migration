angular
  .module("codecraft")
  .directive("petDetails", function() {
    return {
        restrict: "AE",
        templateUrl: "../templates/pet-details.html",
        controller: "myPetController"
    }
  })