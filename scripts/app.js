"use strict";

var app = angular.module("WineApp", ['ngRoute'])
.constant('FirebaseURL', "https://vino-vita.firebaseio.com/");

app.config(function($routeProvider, FBCreds) {
  let authConfig = {
    apiKey: FBCreds.apiKey,
    authDomain: FBCreds.authDomain
  };

  firebase.initializeApp(authConfig);

  $routeProvider.
  when('/items/home', {
    templateUrl: 'partials/login.html',
    controller: 'LoginCtrl'
  }).
  when('/items/list', {
    templateUrl: 'partials/wine-list.html',
    controller: 'WineListCtrl'
  }).
  when('/items/new', {
    templateUrl: 'partials/wine-new.html',
    controller: 'WineNewCtrl'
  }).
  when('/items/edit/:id', {
    templateUrl: 'partials/edit.html',
    controller: 'EditCtrl'
  }).
  when('/items/details/:itemId', {
    templateUrl: 'partials/wine-view.html',
    controller: 'WineViewCtrl'
  })
  .otherwise('/items/home');
});








