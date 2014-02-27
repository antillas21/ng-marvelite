'use strict';

angular.module('ngMarveliteApp')
  .controller('CharacterComicsCtrl',
    ['$scope', 'Character', 'CharacterComics', '$route', '$routeParams', 'Pager',
    function ($scope, Character, CharacterComics, $route, $routeParams, Pager) {
      $scope.pageSize = 20;
      $scope.characterId = $routeParams.id;
      // CharacterComics.fetchAll()
      $scope.paginate = function(pageNumber) {
        return (pageNumber - 1) * $scope.pageSize;
      };

      $scope.fetchCharacterComics = function(id, page, perPage) {
        CharacterComics.fetchAll(id, page, perPage).then(function(data) {
          $scope.processData(data);
        });
      };

      $scope.processData = function(data) {
        $scope.characterComics = data.results;
        $scope.pager = new Pager({
          limit: data.limit,
          total: data.total,
          offset: data.offset
        });
      };

      $scope.fetchCharacter = function(id) {
        Character.fetch(id).then(function(data) {
          $scope.character = data.results[0];
        });
      };

      $scope.fetchCharacterComics(
        $scope.characterId,
        $scope.paginate($route.current.params.page),
        $scope.pageSize
      );
      $scope.fetchCharacter($scope.characterId);
    }]);
