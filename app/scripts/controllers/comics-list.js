'use strict';

angular.module('ngMarveliteApp')
.controller('ComicsListCtrl',
  ['$scope', '$route', '$location', 'Comic', 'Pager', '_',
  function ($scope, $route, $location, Comic, Pager, _) {
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
      $scope.loadComplete = true;
      $scope.noResults = data.total === 0;
      $scope.pager = new Pager({
        limit: data.limit,
        total: data.total,
        offset: data.offset
      });
    };

    $scope.cleanParams = function(pageNumber) {
      var searchParams = {
        page: pageNumber,
        format: $scope.formatFilter,
        type: $scope.typeFilter,
        published: $scope.dateFilter
      };

      var invalidKeys = [];
      _.each(searchParams, function(value, key) {
        if (value === undefined || value === '') {
          invalidKeys.push(key);
        }
      });

      return _.omit(searchParams, invalidKeys);
    };

    $scope.filterComics = function(pageNumber) {
      var page = pageNumber || 1;
      var params = $scope.cleanParams(page);
      $location.search(params);
    };

    $scope.cleanParams();
    $scope.fetchComics(
      $scope.paginate($route.current.params.page || 1),
      $scope.pageSize, $scope.formatFilter, $scope.typeFilter, $scope.dateFilter
    );
  }]);
