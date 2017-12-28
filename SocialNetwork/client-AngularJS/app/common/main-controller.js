angular.module('socialNetwork.common.mainController', ['socialNetwork.common.authService'])
  .controller('MainController', [
    '$scope',
    '$location',
    '$http',
    'authService',
    '$rootScope',
    'httpService',
    function MainController($scope, $location, $http, authService, $rootScope, httpService) {
      $rootScope.isAuthenticated = authService.isAuthenticated()
      $scope.logout = function () {
        $rootScope.isAuthenticated = false
        authService.deauthenticateUser()
        authService.removeUser()
        $location.path('/#')
      }
      $scope.search = function (user) {
        let username = user.username
        let url = `/users/find?search=${username}`
        httpService
          .get(url)
          .then((response) => {
            console.log(response)
            $rootScope.usersFound = response.data
            $location.path('/users/find').search({ search: username })
          })
      }
    }])
