'use strict';

angular.module('ngMarveliteApp')
.controller('CharactersListCtrl',
  ['$scope', '$route', 'Character', 'Pager',
  function ($scope, $route, Character, Pager) {
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
      });
    };

    $scope.processData = function(data) {
      $scope.characters = data.results;
      $scope.loadComplete = true;
      $scope.noResults = data.total === 0;
      $scope.pager = new Pager({
        limit: data.limit,
        total: data.total,
        offset: data.offset
      });
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
