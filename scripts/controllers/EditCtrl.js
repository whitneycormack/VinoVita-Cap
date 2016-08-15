'use strict';

app.controller("EditCtrl", function($scope, $http, $routeParams, $location, WineFactory, AuthFactory){
    $scope.title = "Edit Item";
    $scope.submitButtonText = "Update";

    $scope.newWine = {};


    WineFactory.getSingleWine($routeParams.id)
    .then(function successCallback(response){
        $scope.newWine = response;
    });


    $scope.addNewWine = function() {
        WineFactory.updateWine($routeParams.id, $scope.newWine)
        .then(function successCallback(response){
            $location.url("/items/list");
        });
    };


});






















// 

// app.controller("EditCtrl", function($scope, $routeParams, $route, FBCreds, WineFactory) {

//     var ref = itemObject(FBCreds + $routeParams.id);
//     $scope.newWine = $firebaseObject(ref);

//     $scope.editProduct = function() {
//         $scope.newWine.$save({
//             Name: $scope.newWine.Name,
//             Vineyard: $scope.newWine.Vineyard,
//             Varietal: $scope.newWine.Varietal,
//             Year: $scope.newWine.Year,
//             Region: $scope.newWine.Region,
//             Notes: $scope.newWine.Notes
//         });

//         $scope.edit_form.$setPristine();
//         $scope.newWine = {};
//         $location.path('#/items/list');

//     };

// });