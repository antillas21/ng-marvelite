'use strict';

angular.module('ngMarveliteApp')
.controller('CharactersListCtrl',
  ['$scope', '$resource', '$route', 'Character',
  function ($scope, $resource, $route, Character) {
    $scope.pageSize = 20;

    $scope.paginate = function(pageNumber) {
      return (pageNumber - 1) * $scope.pageSize;
    };

    $scope.search = '';

    $scope.fetchCharacters = function(page, perPage, searchTerm) {
      if (isNaN(page) || page === undefined) {
        page = 0;
      }

      Character.fetchAll(page, perPage, searchTerm).then(function(data) {
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

    $scope.searchCharacters = function(term) {
      $scope.fetchCharacters(
        $scope.paginate($route.current.params.page),
        $scope.pageSize, term
      );
    };

    $scope.fetchCharacters(
      $scope.paginate($route.current.params.page),
      $scope.pageSize
    );
  }]);
