'use strict'

// Declare app level module which depends on views, and components
angular.module('carsSystem', [
  'ngRoute',
  'carsSystem.view1',
  'carsSystem.view2',
  'carsSystem.version',
  'carsSystem.users'
])
  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    // $locationProvider.hashPrefix('!')

    $routeProvider.otherwise({ redirectTo: '/view1' })
  }])
