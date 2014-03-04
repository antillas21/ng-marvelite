'use strict';

angular.module('ngMarveliteApp')
  .controller('EventSeriesCtrl', [
    '$scope', 'Event', 'EventSeries', '$routeParams', '$route', 'Pager',
    function ($scope, Event, EventSeries, $routeParams, $route, Pager) {
      $scope.pageSize = 20;
      $scope.paginate = function(pageNumber) {
        return (pageNumber - 1) * $scope.pageSize;
      };
      $scope.eventId = $routeParams.id;

      $scope.fetchEventSeries = function(id, page, perPage) {
        if (isNaN(page) || page === undefined) {
          page = 0;
        }
        EventSeries.fetch(id, page, perPage).then(function(data) {
          processData(data);
        });
      };

      var processData = function(data) {
        $scope.eventSeries = data.results;
        $scope.loadComplete = true;
        $scope.noResults = data.total === 0;
        $scope.pager = new Pager({
          limit: data.limit,
          offset: data.offset,
          total: data.total
        });
      };

      $scope.fetchEventSeries(
        $scope.eventId,
        $scope.paginate($route.current.params.page),
        $scope.pageSize
      );

      Event.fetch($scope.eventId).then(function(data) {
        $scope.comicEvent = data.results[0];
      });
    }
  ]);
