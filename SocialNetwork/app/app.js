'use strict'

// Declare app level module which depends on views, and components
angular.module('socialNetwork', [
  'ngRoute',
  'angular-loading-bar',
  'socialNetwork.home'
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
  // .const('BASE_URL', 'http://softuni-social-network.azurewebsites.net/api')
