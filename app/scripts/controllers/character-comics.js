'use strict';

angular.module('ngMarveliteApp')
  .controller('CharacterComicsCtrl',
    ['$scope', '$resource', 'Character', 'CharacterComics', '$route', '$routeParams',
    function ($scope, $resource, Character, CharacterComics, $route, $routeParams) {
      $scope.pageSize = 20;
      $scope.characterId = $routeParams.id;
      // CharacterComics.fetchAll()
      $scope.paginate = function(pageNumber) {
        return (pageNumber - 1) * $scope.pageSize;
      };

      $scope.fetchCharacterComics = function(id, page, perPage) {
        CharacterComics.fetchAll(id, page, perPage).then(function(data) {
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
        $scope.characterComics = data.results;
        $scope.pageSize = data.limit;
        $scope.totalRecords = data.total;
        $scope.offset = data.offset;
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
