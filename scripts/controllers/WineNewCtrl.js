"use strict";

app.controller("WineNewCtrl", function ($scope, $location, WineFactory) {
  $scope.newWine = {
    Name: "",
    Vineyard: "",
    Region: "", 
    Varietal: "",
    Year: "", 
    Notes: ""
  };
  
    $scope.addNewWine = function() {
      console.log("added new wine", $scope.newWine);
      WineFactory.postNewWine($scope.newWine)
     .then(function (response) {
        $location.url("/items/list");
     });
    };
});