angular.module('socialNetwork.common.httpService', [])
  .factory('httpService', [
    '$http', '$q', 'BASE_URL',
    function ($http, $q, BASE_URL) {
      function get (url, authenticated = false) {
        let deferred = $q.defer()
        $http.get(`${BASE_URL}${url}`)
          .then(response => {
            return deferred.resolve(response)
          }, () => {

          })
        return deferred.promise
      }
      function post (url, data, authenticated = false) {
        let deferred = $q.defer()
        $http.post(`${BASE_URL}${url}`, data)
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
