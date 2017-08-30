(function () {
  angular.module('socialNetwork.newsFeed.newsFeedController', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/newsFeed', {
        templateUrl: 'news-feed/news-feed.html',
        controller: 'NewsFeedController',
        css: ['news-feed/news-feed.css']
      })
    }])
    .controller('NewsFeedController', [
      '$scope',
      function NewsFeedController ($scope) {

      }
    ])
}())
