'use strict';

angular.module('ngMarveliteApp')
.controller('ComicsListCtrl',
  ['$scope', '$route', '$location', '$resource', 'Comic',
  function ($scope, $route, $location, $resouce, Comic) {
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
