'use strict';
/* global app:true */
var app = angular.module('anynewsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
]);
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl'
      })
      .when('/rmlist', {
        templateUrl: 'views/rmlist.html',
        controller: 'RMViewCtrl'
      })
//      .when('/posts/:postId', {
//        templateUrl: 'views/showpost.html',
//        controller: 'PostViewCtrl'
//      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl'
      })
//      .when('/login', {
//        templateUrl: 'views/login.html',
//        controller: 'AuthCtrl'
//      })
//      .when('/users/:username', {
//        templateUrl: 'views/profile.html',
//        controller: 'ProfileCtrl'
//      })
      .otherwise({
        redirectTo: '/'
      }); 
  }); 
app.constant('FIREBASE_URL','https://rmfirebasev1.firebaseio.com/');