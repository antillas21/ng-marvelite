'use strict';

angular.module('ngMarveliteApp')
.controller('CharacterCtrl',
  ['$scope', '$routeParams', '$resource', 'Character',
  function ($scope, $routeParams, $resource, Character) {
    Character.fetch($routeParams.id).then(function(data) {
      $scope.character = data.results[0];

      $scope.extractComicId = function(str) {
        return str.split('/').pop();
      };
    });
  }]);
