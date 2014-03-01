'use strict';

angular.module('ngMarveliteApp')
  .controller('EventCtrl', [
    '$scope', '$routeParams', 'Event', 'urlParser',
    function ($scope, $routeParams, Event, urlParser) {
      $scope.parser = urlParser;

      Event.fetch($routeParams.id).then(function(data) {
        $scope.comicEvent = data.results[0];
        $scope.loadComplete = true;
      });
    }
  ]);
