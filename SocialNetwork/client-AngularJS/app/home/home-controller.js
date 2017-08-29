(function () {
  'use strict'
  angular.module('socialNetwork.home', [
    'socialNetwork.users.auth'
  ])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: 'home/home.html',
        css: ['home/home.css'],
        controller: 'HomeController'
      })
    }])
    .controller('HomeController', [
      '$scope',
      'auth',
      function HomeController ($scope, auth) {
        $scope.login = (user) => {
          auth.loginUser(user)
        }
        $scope.register = (user) => {
          auth.registerUser(user)
            .then(registeredUser => {
              console.log(registeredUser)
            })
        }
      }
    ])
}())
