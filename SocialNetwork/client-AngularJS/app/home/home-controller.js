'use strict'
angular.module('socialNetwork.home.homeController', ['socialNetwork.users.service'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'home/home.html',
      css: ['home/home.css'],
      controller: 'HomeController'
    })
  }])
  .controller('HomeController', [
    '$scope',
    '$location',
    'usersService',
    'authService',
    '$rootScope',
    function HomeController ($scope, $location, usersService, authService, $rootScope) {
      // $scope.login = (user) => {
      //   usersService.loginUser(user)
      //     .then(response => {
      //       if (response.success) {
      //         const currentUser = response.user
      //         const token = response.token
      //         authService.saveUser(currentUser)
      //         authService.authenticateUser(token)
      //         $rootScope.isAuthenticated = true
      //         $location.path('newsFeed')
      //       }
      //     })
      // }

      // $scope.register = (user) => {
      //   usersService.registerUser(user)
      //     .then(response => {
      //       console.log(response)
      //     })
      // }
    }
  ])
