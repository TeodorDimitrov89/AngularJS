angular.module('socialNetwork.users', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/users', {
      templateUrl: 'users/users.html',
      controller: 'UsersController'
    })
  }])
  .factory('repos', ['$http', '$q', function ($http, $q) {
    function getRepositories (username) {
      let deferred = $q.defer()
      $http
        .get(`https://api.github.com/users/${username}/repos`)
        .then(function (result) {
          deferred.resolve(result.data)
        }, function (err) {
          deferred.reject(err)
        })
      return deferred.promise
    }

    return {
      getRepositories
    }
  }])
  .controller('UsersController', [
    '$scope',
    'repos',
    function UsersController ($scope, repos) {
      repos
        .getRepositories('TeodorDimitrov89')
        .then(function (repos) {
          $scope.repos = repos
        })
    }])
