'use strict'
angular.module('socialNetwork.users.service', [])
  .factory('usersService', [
    '$http', '$q', 'BASE_URL', 'httpService',
    function ($http, $q, BASE_URL, httpService) {
      // function preserveUserData (data) {
      //   let token = data.token
      //   $http.defaults.headers.common.Authorization = `bearer ${token}`
      // }
      function registerUser (user) {
        let deferred = $q.defer()
        httpService
          .post(`/auth/signup`, user)
          .then(response => {
            deferred.resolve(response)
          })
        return deferred.promise
      }
      function loginUser (user) {
        let deferred = $q.defer()
        httpService
          .post(`/auth/login`, user)
          .then(response => {
            deferred.resolve(response.data)
          })
        return deferred.promise
      }
      return {
        registerUser,
        loginUser
      }
    }
  ])
