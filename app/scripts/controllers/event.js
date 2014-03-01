'use strict';

angular.module('ngMarveliteApp')
  .controller('EventCtrl', [
    '$scope', '$routeParams', 'Event',
    function ($scope, $routeParams, Event) {
      Event.fetch($routeParams.id).then(function(data) {
        $scope.comicEvent = data.results[0];
        $scope.loadComplete = true;
      });

      $scope.extractResourceId = function(resourceURI) {
        return resourceURI.split('/').pop();
      };
    }
  ]);
