'use strict';

angular.module('ngMarveliteApp')
  .controller('ComicCtrl',
    ['$scope', '$resource', '$routeParams', 'Comic',
    function ($scope, $resource, $routeParams, Comic) {
      Comic.fetch($routeParams.id).then(function(data) {
        $scope.comic = data.results[0];
        $scope.loadComplete = true;
      });
    }]);
