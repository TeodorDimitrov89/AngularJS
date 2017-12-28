angular.module('socialNetwork.newsFeed.newsFeedController', [])
  .config(['$routeProvider', function ($routeProvider) {
    let routeChecks = {
      authenticated: ['$q', 'authService', function ($q, authService) {
        if (authService.isAuthenticated()) {
          return $q.when(true)
        }
        return $q.reject('Unauthorized Access')
      }]
    }
    $routeProvider.when('/newsFeed', {
      templateUrl: 'news-feed/news-feed.html',
      controller: 'NewsFeedController',
      css: ['news-feed/news-feed.css'],
      resolve: routeChecks.authenticated
    })
  }])
  .controller('NewsFeedController', [
    '$scope',
    'feedService',
    function NewsFeedController($scope, feedService) {
      // feedService
      //   .latest()
      //   .then(response => {
      //     // $scope.latestFeed = response
      //     console.log(response)
      //   })
    }
  ])
