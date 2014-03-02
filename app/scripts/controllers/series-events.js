'use strict';

angular.module('ngMarveliteApp')
  .controller('SeriesEventsCtrl', [
    '$scope', 'Series', 'SeriesEvents', 'Pager', '$route', '$routeParams',
    function ($scope, Series, SeriesEvents, Pager, $route, $routeParams) {
      $scope.seriesId = $routeParams.id;
      $scope.pageSize = 20;
      $scope.paginate = function(pageNumber) {
        return (pageNumber - 1) * $scope.pageSize;
      };

      $scope.fetchSeriesEvents = function(id, page, perPage) {
        if (isNaN(page) || page === undefined) {
          page = 0;
        }
        SeriesEvents.fetch(id, page, perPage).then(function(data) {
          $scope.processData(data);
        });
      };

      $scope.processData = function(data) {
        $scope.seriesEvents = data.results;
        $scope.loadComplete = true;
        $scope.noResults = data.total === 0;
        $scope.pager = new Pager({
          limit: data.limit,
          total: data.total,
          offset: data.offset
        });
      };

      $scope.fetchSeriesEvents(
        $scope.seriesId,
        $scope.paginate($route.current.params.page),
        $scope.pageSize
      );

      Series.fetch($scope.seriesId).then(function(data) {
        $scope.comicSeries = data.results[0];
      });
    }
  ]);
