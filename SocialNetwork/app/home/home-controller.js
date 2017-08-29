angular.module('socialNetwork.home', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'home/home.html',
      controller: 'HomeController'
    })
  }])
  .controller('HomeController', [
    '$scope', function HomeController ($scope) {

    }
  ])
