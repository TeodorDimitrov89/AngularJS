(function () {
  'use strict'
  angular.module('socialNetwork.home', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: 'home/home.html',
        css: ['home/home.css'],
        controller: 'HomeController'
      })
    }])
    .controller('HomeController', [
      '$scope', function HomeController ($scope) {
        $scope.login = function (user) {
          console.log(user)
        }
        $scope.register = function (user) {
          console.log(user)
        }
      }
    ])
}())
