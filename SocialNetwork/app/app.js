'use strict'

// Declare app level module which depends on views, and components
angular.module('socialNetwork', [
  'ngRoute',
  'angular-loading-bar',
  'socialNetwork.users'
])
  .config(['$locationProvider',
    '$routeProvider',
    'cfpLoadingBarProvider',
    function ($locationProvider, $routeProvider, cfpLoadingBarProvider) {
      // $locationProvider.hashPrefix('!')
      cfpLoadingBarProvider.includeSpinner = true
      cfpLoadingBarProvider.includeBar = true
      cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Loading...</div>'
      $routeProvider.otherwise({ redirectTo: '/' })
    }])