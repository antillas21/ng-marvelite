'use strict';

angular.module('ngMarveliteApp')
.controller('CharacterCtrl',
  ['$scope', '$routeParams', '$resource', 'Character', 'urlParser',
  function ($scope, $routeParams, $resource, Character, urlParser) {
    Character.fetch($routeParams.id).then(function(data) {
      $scope.character = data.results[0];
      $scope.loadComplete = true;
      $scope.parser = urlParser;

    });
  }]);
