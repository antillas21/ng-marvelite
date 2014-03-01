'use strict';

angular.module('ngMarveliteApp')
  .controller('EventComicsCtrl', [
    '$scope', '$routeParams', '$route', 'Event', 'EventComics', 'Pager',
    function ($scope, $routeParams, $route, Event, EventComics, Pager) {
      $scope.pageSize = 20;
      $scope.eventId = $routeParams.id;

      $scope.paginate = function(pageNumber) {
        return (pageNumber - 1) * $scope.pageSize;
      };

      $scope.fetchEventComics = function(id, page, perPage) {
        EventComics.fetchAll(id, page, perPage).then(function(data) {
          $scope.processData(data);
        });
      };

      $scope.processData = function(data) {
        $scope.eventComics = data.results;
        $scope.loadComplete = true;
        $scope.noResults = data.total === 0;
        $scope.pager = new Pager({
          limit: data.limit,
          total: data.total,
          offset: data.offset
        });
      };

      $scope.fetchEvent = function(id) {
        Event.fetch(id).then(function(data) {
          $scope.comicEvent = data.results[0];
        });
      };

      $scope.fetchEventComics(
        $scope.eventId,
        $scope.paginate($route.current.params.page),
        $scope.pageSize
      );
      $scope.fetchEvent($scope.eventId);
    }
  ]);
