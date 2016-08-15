"use strict";

app.controller("WineListCtrl", function ($scope, WineFactory) {
   WineFactory.getWineList()
  .then(function (itemCollection) {
  $scope.items = itemCollection;
  });


$scope.delete = function (id) {
    // console.log("id: ", id);
    WineFactory.deleteWine(id)
    .then(function() {
      // console.log("deleted");
      WineFactory.getWineList()
      .then(function(itemCollection) {
        // console.log("item collection", itemCollection);
        $scope.items = itemCollection;
      });
    });
  };
});
