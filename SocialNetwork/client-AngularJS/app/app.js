'use strict'

// Declare app level module which depends on views, and components
angular.module('socialNetwork', [
  'ngRoute',
  'angular-loading-bar',
  'socialNetwork.common.mainController',
  'socialNetwork.common.footerDirective',
  'socialNetwork.common.httpService',
  'socialNetwork.common.authService',
  'socialNetwork.home.homeController',
  'socialNetwork.users.loginController',
  'socialNetwork.users.registerController',
  'socialNetwork.users.allUsersController',
  'socialNetwork.newsFeed.feedService',
  'socialNetwork.newsFeed.newsFeedController'
])
  .config([
    '$locationProvider',
    '$routeProvider',
    '$httpProvider',
    'cfpLoadingBarProvider',
    function ($locationProvider, $routeProvider, $httpProvider, cfpLoadingBarProvider) {
      cfpLoadingBarProvider.includeSpinner = true
      cfpLoadingBarProvider.includeBar = true
      cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Loading...</div>'
      // $routeProvider.otherwise({ redirectTo: '/' })

      $httpProvider.interceptors.push(['$q', 'toastr', function ($q, toastr) {
        return {
          'response': function (response) {
            if (response.data && response.data.success) {
              if (response.data.message) {
                toastr.success(response.data.message)
              }
            }
            if (response.data && response.data.success === false) {
              toastr.error(response.data.message)
            }
            return response
          },
          'responseError': function (rejection) {
            return $q.reject(rejection)
          }
        }
      }])
    }])
  .run(['$rootScope', 'authService', '$location', function ($rootScope, authService, $location) {
    $rootScope.$on('$routeChangeError', function (event, current, previous, rejection) {
      if (rejection === 'Unauthorized Access') {
        $location.path('/')
      }
    })
  }])
  .constant('toastr', toastr)
  .constant('BASE_URL', 'http://localhost:5000')
