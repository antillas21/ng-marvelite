'use strict';

angular.module('ngMarveliteApp')
  .controller('SeriesComicsCtrl', [
    '$scope', 'Series', 'SeriesComics', 'Pager', '$route', '$routeParams',
    function ($scope, Series, SeriesComics, Pager, $route, $routeParams) {
      $scope.pageSize = 20;
      $scope.seriesId = $routeParams.id;

      $scope.paginate = function(pageNumber) {
        return (pageNumber - 1) * $scope.pageSize;
      };

      var processData = function(data) {
        $scope.seriesComics = data.results;
        $scope.loadComplete = true;
        $scope.pager = new Pager({
          limit: data.limit,
          total: data.total,
          offset: data.offset
        });
      };

      $scope.fetchSeriesComics = function(id, page, perPage) {
        if (isNaN(page) || page === undefined) {
          page = 0;
        }
        SeriesComics.fetch(id, page, perPage).then(function(data) {
          processData(data);
        });
      };

      $scope.fetchSeriesComics(
        $scope.seriesId,
        $scope.paginate($route.current.params.page),
        $scope.pageSize
      );

      Series.fetch($scope.seriesId).then(function(data) {
        $scope.comicSeries = data.results[0];
      });
    }
  ]);
