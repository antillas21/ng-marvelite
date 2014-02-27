'use strict';

angular.module('ngMarveliteApp')
.controller('ComicsListCtrl',
  ['$scope', '$route', '$location', 'Comic', 'Pager',
  function ($scope, $route, $location, Comic, Pager) {
    console.log($location.search());
    $scope.pageSize = 20;
    $scope.formatFilter = $location.search().format;
    $scope.typeFilter = $location.search().type;
    $scope.dateFilter = $location.search().published;

    $scope.paginate = function(pageNumber) {
      return (pageNumber - 1) * $scope.pageSize;
    };

    $scope.fetchComics = function(page, perPage, format, type, dateRange) {
      Comic.fetchAll(page, perPage, format, type, dateRange).then(function(data) {
        $scope.processData(data);
      });
    };

    $scope.processData = function(data) {
      $scope.comics = data.results;
      $scope.pager = new Pager({
        limit: data.limit,
        total: data.total,
        offset: data.offset
      });
    };

    $scope.cleanParams = function() {
      if ($scope.formatFilter === '') {
        $scope.formatFilter = undefined;
      }
      if ($scope.typeFilter === '') {
        $scope.typeFilter = undefined;
      }
      if ($scope.dateFilter === '') {
        $scope.dateFilter = undefined;
      }
    };

    $scope.filterComics = function() {
      $scope.cleanParams();
      $location.search({format: $scope.formatFilter, type: $scope.typeFilter, published: $scope.dateFilter});
    };

    $scope.cleanParams();
    $scope.fetchComics(
      $scope.paginate($route.current.params.page || 1),
      $scope.pageSize, $scope.formatFilter, $scope.typeFilter, $scope.dateFilter
    );
  }]);
