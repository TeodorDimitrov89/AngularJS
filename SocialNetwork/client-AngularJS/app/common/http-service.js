angular.module('socialNetwork.common.httpService', [])
  .factory('httpService', [
    '$http', '$q', 'BASE_URL', 'authService',
    function ($http, $q, BASE_URL, authService) {
      // const getMethod = 'get'
      const postMethod = 'post'
      function getRequestOptions (method, authenticated) {
        let requestHeaders = $http.defaults.headers.common
        let token = authService.getToken()
        if (method === postMethod) {
          requestHeaders['Content-Type'] = 'application/json'
        }
        if (authenticated) {
          requestHeaders['Authorization'] = `bearer ${token}`
        }
        return requestHeaders
      }
      function get (url, authenticated = false) {
        let deferred = $q.defer()
        let requestHeaders = $http.defaults.headers.common
        $http.get(`${BASE_URL}${url}`, authenticated, requestHeaders)
          .then(response => {
            return deferred.resolve(response)
          }, () => {

          })
        return deferred.promise
      }
      function post (url, data, authenticated = false) {
        let deferred = $q.defer()
        const requestOptions = getRequestOptions(postMethod, authenticated)
        $http.post(`${BASE_URL}${url}`, data, requestOptions)
          .then(response => {
            return deferred.resolve(response)
          }, () => {

          })
        return deferred.promise
      }
      return {
        get,
        post
      }
    }
  ])
