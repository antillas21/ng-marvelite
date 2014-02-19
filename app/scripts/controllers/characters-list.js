'use strict';

angular.module('ngMarveliteApp')
.controller('CharactersListCtrl',
  ['$scope', '$resource', '$route', 'Character',
  function ($scope, $resource, $route, Character) {
    $scope.pageSize = 20;

    $scope.paginate = function(pageNumber) {
      return (pageNumber - 1) * $scope.pageSize;
    };

    $scope.fetchCharacters = function(page, perPage) {
      Character.fetchAll(page, perPage).then(function(data) {
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
      $scope.characters = data.results;
      $scope.pageSize = data.limit;
      $scope.totalRecords = data.total;
      $scope.offset = data.offset;
    };

    $scope.fetchCharacters(
      $scope.paginate($route.current.params.page),
      $scope.pageSize
    );
  }]);
