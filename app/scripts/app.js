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
      .when('/events', {
        templateUrl: 'views/events-list.html',
        controller: 'EventsListCtrl'
      })
      .when('/events/:id', {
        templateUrl: 'views/event.html',
        controller: 'EventCtrl'
      })
      .when('/events/:id/comics', {
        templateUrl: 'views/event-comics.html',
        controller: 'EventComicsCtrl'
      })
      .when('/events/:id/characters', {
        templateUrl: 'views/event-characters.html',
        controller: 'EventCharactersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
