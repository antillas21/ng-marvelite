'use strict';

angular.module('ngMarveliteApp')
  .controller('CharacterEventsCtrl', [
    '$scope', 'Character', 'CharacterEvents', 'Pager', '$route', '$routeParams',
    function ($scope, Character, CharacterEvents, Pager, $route, $routeParams) {
      $scope.pageSize = 20;
      $scope.characterId = $routeParams.id;

      $scope.paginate = function(page) {
        return (page - 1) * $scope.pageSize;
      };

      $scope.fetchCharacterEvents = function(id, page, perPage) {
        if (isNaN(page) || page === undefined) {
          page = 0;
        }
        CharacterEvents.fetch(id, page, perPage).then(function(data) {
          processData(data);
        });
      };

      var processData = function(data) {
        $scope.characterEvents = data.results;
        $scope.loadComplete = true;
        $scope.noResults = data.total === 0;
        $scope.pager = new Pager({
          limit: data.limit,
          offset: data.offset,
          total: data.total
        })
      };

      $scope.fetchCharacterEvents(
        $scope.characterId,
        $scope.paginate($route.current.params.page),
        $scope.pageSize
      );

      Character.fetch($scope.characterId).then(function(data) {
        $scope.character = data.results[0];
      });
    }
  ]);
