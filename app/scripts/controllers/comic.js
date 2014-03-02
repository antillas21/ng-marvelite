'use strict';

angular.module('ngMarveliteApp')
  .controller('ComicCtrl',
    ['$scope', '$resource', '$routeParams', 'Comic', 'urlParser',
    function ($scope, $resource, $routeParams, Comic, urlParser) {
      $scope.parser = urlParser;

      Comic.fetch($routeParams.id).then(function(data) {
        $scope.comic = data.results[0];
        $scope.loadComplete = true;
      });
    }]);
