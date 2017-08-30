(function () {
  angular.module('socialNetwork.common.mainController', ['socialNetwork.common.authService'])
    .controller('MainController', [
      '$scope',
      '$http',
      'authService',
      function MainController ($scope, $http, authService) {
        $scope.isAuthenticated = authService.isAuthenticated()
      }])
}())
