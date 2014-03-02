'use strict';

angular.module('ngMarveliteApp')
  .controller('CharacterSeriesListCtrl', [
    '$scope', 'Character', 'CharacterSeries', 'Pager', '$route', '$routeParams',
    function ($scope, Character, CharacterSeries, Pager, $route, $routeParams) {
      $scope.characterId = $routeParams.id;
      $scope.pageSize = 20;

      $scope.paginate = function(pageNumber) {
        return (pageNumber - 1) * $scope.pageSize;
      };

      $scope.fetchCharacterSeries = function(id, page, perPage) {
        if (isNaN(page) || page === undefined) {
          page = 0;
        }
        CharacterSeries.fetch(id, page, perPage).then(function(data) {
          $scope.processData(data);
        });
      };

      $scope.processData = function(data) {
        $scope.characterSeries = data.results;
        $scope.loadComplete = true;
        $scope.noResults = data.total === 0;
        $scope.pager = new Pager({
          limit: data.limit,
          total: data.total,
          offset: data.offset
        });
      };

      Character.fetch($scope.characterId).then(function(data) {
        $scope.character = data.results[0];
      });

      $scope.fetchCharacterSeries(
        $scope.characterId,
        $scope.paginate($route.current.params.page),
        $scope.pageSize
      );
    }
  ]);
