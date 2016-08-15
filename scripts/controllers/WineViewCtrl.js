"use strict";

app.controller("WineViewCtrl", function ($scope, $routeParams, WineFactory) {
  $scope.items = [];
  $scope.selectedItem = null;

WineFactory.getWineList()
.then(function(itemCollection) {
  $scope.items = itemCollection;

  $scope.selectedItem = $scope.items.filter(function(item) {
    return item.id === $routeParams.itemId;
    })[0];
  });
});


// $scope.delete = function (id) {
//     console.log("id: ", id);
//     WineFactory.deleteWine(id)
//     .then(function() {
//       console.log("deleted");
//       WineFactory.getWineList()
//       .then(function(itemCollection) {
//         // console.log("item collection", itemCollection);
//         $scope.items = itemCollection;
//       });
//     });
//   };


