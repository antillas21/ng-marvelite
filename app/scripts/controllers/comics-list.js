'use strict';

angular.module('ngMarveliteApp')
.controller('ComicsListCtrl',
  ['$scope', '$route', '$resource', 'Comic',
  function ($scope, $route, $resouce, Comic) {
    $scope.pageSize = 20;

    $scope.paginate = function(pageNumber) {
      return (pageNumber - 1) * $scope.pageSize;
    };

    $scope.fetchComics = function(page, perPage, format, type, dateRange) {
      Comic.fetchAll(page, perPage, format, type, dateRange).then(function(data) {
        $scope.processData(data);
      }).then(function() {
        // helper methods
        $scope.pagesTotal = function() {
          return Math.ceil($scope.totalRecords / $scope.pageSize);
        };
        $scope.currentPage = function() {
          return Math.ceil($scope.offset / $scope.pageSize) + 1;
        };
        $scope.nextPage = function() {
          return $scope.currentPage() + 1;
        };
        $scope.prevPage = function() {
          return $scope.currentPage() - 1;
        };
        $scope.showNext = function() {
          return $scope.nextPage() <= $scope.pagesTotal();
        };
        $scope.showPrev = function() {
          return $scope.prevPage() >= 1;
        };
      });
    };

    $scope.processData = function(data) {
      $scope.comics = data.results;
      $scope.pageSize = data.limit;
      $scope.totalRecords = data.total;
      $scope.offset = data.offset;
    };

    $scope.filterComics = function(formatFilter, typeFilter, dateFilter, pageNumber) {
      if (pageNumber === undefined) {
        pageNumber = 1;
      }
      if (formatFilter === '') {
        formatFilter = undefined;
      }
      if (typeFilter === '') {
        typeFilter = undefined;
      }
      if (dateFilter === '') {
        dateFilter = undefined;
      }

      $scope.fetchComics(
        $scope.paginate(pageNumber),
        $scope.pageSize, formatFilter, typeFilter, dateFilter
      );
    };

    $scope.fetchComics(
      $scope.paginate($route.current.params.page),
      $scope.pageSize
    );
  }]);
