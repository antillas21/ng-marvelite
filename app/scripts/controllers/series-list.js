'use strict';

angular.module('ngMarveliteApp')
  .controller('SeriesListCtrl', [
    '$scope', 'Series', 'Pager', '$route',
    function ($scope, Series, Pager, $route) {
      $scope.pageSize = 20;
      $scope.paginate = function(pageNumber) {
        return (pageNumber - 1) * $scope.pageSize;
      };

      $scope.fetchSeries = function(page, qty, searchTerm) {
        if (isNaN(page) || page === undefined) {
          page = 0;
        }
        Series.fetchAll(page, qty, searchTerm).then(function(data) {
          $scope.processData(data);
        });
      };

      $scope.searchSeries = function(searchTerm) {
        $scope.loadComplete = false;
        $scope.comicSeries = [];
        $scope.noResults = false;
        $scope.fetchSeries(
          $scope.paginate(1),
          $scope.pageSize,
          searchTerm
        );
      };

      $scope.processData = function(data) {
        $scope.comicSeries = data.results;
        $scope.loadComplete = true;
        $scope.noResults = data.total === 0;
        $scope.pager = new Pager({
          limit: data.limit,
          offset: data.offset,
          total: data.total
        });
      };

      $scope.fetchSeries(
        $scope.paginate($route.current.params.page),
        $scope.pageSize
      );
    }
  ]);
