'use strict'

// Declare app level module which depends on views, and components
angular.module('socialNetwork', [
  'ngRoute',
  'angular-loading-bar',
  'socialNetwork.common.mainController',
  'socialNetwork.common.httpService',
  'socialNetwork.common.authService',
  'socialNetwork.home.homeController',
  'socialNetwork.newsFeed.newsFeedController'
])
  .config(['$locationProvider',
    '$routeProvider',
    'cfpLoadingBarProvider',
    function ($locationProvider, $routeProvider, cfpLoadingBarProvider) {
      $locationProvider.html5Mode(true)
      cfpLoadingBarProvider.includeSpinner = true
      cfpLoadingBarProvider.includeBar = true
      cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Loading...</div>'
      $routeProvider.otherwise({ redirectTo: '/' })
    }])
  .constant('BASE_URL', 'http://localhost:5000')
