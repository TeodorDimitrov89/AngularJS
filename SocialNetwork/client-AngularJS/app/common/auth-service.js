(function () {
  'use strict'
  angular.module('socialNetwork.common.authService', [])
    .factory('authService', [
      '$http',
      '$window',
      'BASE_URL',
      function ($http, $window, BASE_URL) {
        // $http.defaults.headers.common.Authorization = `bearer ${token}`
        function saveUser (user) {
          $window.localStorage.setItem('user', JSON.stringify(user))
        }
        function getUser () {
          const userJson = $window.localStorage.getItem('user')
          if (userJson) {
            return JSON.parse(userJson)
          }
          return {}
        }
        function removeUser () {
          $window.localStorage.removeItem('user')
        }
        function authenticateUser (token) {
          $window.localStorage.setItem('token', token)
        }
        function isAuthenticated () {
          return $window.localStorage.getItem('token') !== null
        }

        function deauthenticateUser () {
          $window.localStorage.removeItem('token')
        }
        function getToken () {
          return $window.localStorage.getItem('token')
        }
        return {
          saveUser,
          getUser,
          removeUser,
          authenticateUser,
          isAuthenticated,
          deauthenticateUser,
          getToken
        }
      }])
}())
