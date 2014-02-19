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
      .when('/characters/:id', {
        templateUrl: 'views/character.html',
        controller: 'CharacterCtrl'
      })
      .when('/characters/:id/comics', {
        templateUrl: 'views/character-comics.html',
        controller: 'CharacterComicsCtrl'
      })
      .when('/comics', {
        templateUrl: 'views/comics-list.html',
        controller: 'ComicsListCtrl'
      })
      .when('/comics/:id', {
        templateUrl: 'views/comic.html',
        controller: 'ComicCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
