'use strict'
angular.module('socialNetwork.common.authService', [])
  .factory('authService', [
    '$http',
    '$window',
    '$q',
    '$route',
    'BASE_URL',
    function ($http, $window, $q, $route, BASE_URL) {
      // let AUTHENTICATION_COOKIE_KEY = '!__Authentication_Cookie_Key__!'
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
      // let deferred = $q.defer()
      // const currentUser = $window.localStorage.getItem('user')
      // function getUser () {
      //   if (currentUser) {
      //     return $q.when(currentUser)
      //   } else {
      //     return deferred.promise
      //   }
      // }
      function removeUser () {
        $window.localStorage.removeItem('user')
      }
      function authenticateUser (token) {
        // $cookies.put(AUTHENTICATION_COOKIE_KEY, token)
        $window.localStorage.setItem('token', token)
      }
      function isAuthenticated () {
        // return !!$cookies.get(AUTHENTICATION_COOKIE_KEY)
        return $window.localStorage.getItem('token') !== null
      }

      function deauthenticateUser () {
        $window.localStorage.removeItem('token')
      }
      function getToken () {
        // return $cookies.get(AUTHENTICATION_COOKIE_KEY)
        return $window.localStorage.getItem('token')
      }
      // function refreshCookie () {
      //   if (isAuthenticated()) {
      //     $http.defaults.headers.common.Authorization = `bearer ${getToken()}`
      //   }
      // }
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
