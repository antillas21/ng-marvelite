'use strict';

angular.module('ngMarveliteApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/characters', {
        templateUrl: 'views/characters-list.html',
        controller: 'CharactersListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
