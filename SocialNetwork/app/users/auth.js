(function () {
  'use strict'
  angular.module('socialNetwork.users.auth', [])
    .factory('auth', [
      '$http', '$q', 'BASE_URL',
      function ($http, $q, BASE_URL) {
        function registerUser (user) {
          let deferred = $q.defer()
          $http.post(`${BASE_URL}Users/Register`, user)
            .then(response => {
              deferred.resolve(response.data)
            }, () => {

            })
          return deferred.promise
        }
        function loginUser (user) {
          let deferred = $q.defer()
          $http.post(`${BASE_URL}Users/Login`, user)
            .then(response => {
              deferred.resolve(response.data)
            }, () => {

            })
          return deferred.promise
        }
        function logout () {

        }
        return {
          registerUser,
          loginUser,
          logout
        }
      }
    ])
}())
