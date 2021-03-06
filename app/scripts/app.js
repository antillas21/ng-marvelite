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
      .when('/characters/:id/events', {
        templateUrl: 'views/character-events.html',
        controller: 'CharacterEventsCtrl'
      })
      .when('/characters/:id/series', {
        templateUrl: 'views/character-series.html',
        controller: 'CharacterSeriesListCtrl'
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
      .when('/events/:id/series', {
        templateUrl: 'views/event-series.html',
        controller: 'EventSeriesCtrl'
      })
      .when('/series', {
        templateUrl: 'views/series-list.html',
        controller: 'SeriesListCtrl'
      })
      .when('/series/:id', {
        templateUrl: 'views/series.html',
        controller: 'SeriesCtrl'
      })
      .when('/series/:id/comics', {
        templateUrl: 'views/series-comics.html',
        controller: 'SeriesComicsCtrl'
      })
      .when('/series/:id/events', {
        templateUrl: 'views/series-events.html',
        controller: 'SeriesEventsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
