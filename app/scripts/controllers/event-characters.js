'use strict';

angular.module('ngMarveliteApp')
  .controller('EventCharactersCtrl',
    ['$scope', '$routeParams', '$route', 'EventCharacters', 'Event', 'Pager',
    function ($scope, $routeParams, $route, EventCharacters, Event, Pager) {
    $scope.pageSize = 20;
    $scope.eventId = $routeParams.id;

    $scope.paginate = function(pageNumber) {
      return (pageNumber - 1) * $scope.pageSize;
    };

    $scope.fetchEventCharacters = function(id, page, perPage) {
      if (isNaN(page) || page === undefined) {
        page = 0;
      }
      EventCharacters.fetchAll(id, page, perPage).then(function(data) {
        console.log(data);
        $scope.processData(data);
      });
    };

    $scope.fetchEvent = function(id) {
      Event.fetch(id).then(function(data) {
        $scope.comicEvent = data.results[0];
      });
    };

    $scope.processData = function(data) {
      $scope.eventCharacters = data.results;
      $scope.loadComplete = true;
      $scope.noResults = data.total === 0;
      $scope.pager = new Pager({
        limit: data.limit,
        offset: data.offset,
        total: data.total
      });
    };

    $scope.fetchEventCharacters(
      $scope.eventId,
      $scope.paginate($route.current.params.page),
      $scope.pageSize
    );

    $scope.fetchEvent($scope.eventId);
  }]);
