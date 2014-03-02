'use strict';

angular.module('ngMarveliteApp')
  .controller('SeriesCtrl', [
    '$scope', 'urlParser', '$routeParams', 'Series',
    function ($scope, urlParser, $routeParams, Series) {
      $scope.parser = urlParser;
      $scope.seriesId = $routeParams.id;

      Series.fetch($scope.seriesId).then(function(data) {
        console.log(data);
        $scope.comicSeries = data.results[0];
        $scope.loadComplete = true;
        $scope.noResults = data.total === 0;
      });
    }
  ]);
