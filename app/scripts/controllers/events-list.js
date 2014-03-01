'use strict';

angular.module('ngMarveliteApp')
.controller('EventsListCtrl', [
  '$scope', '$route', 'Event', 'Pager', function ($scope, $route, Event, Pager) {
    $scope.pageSize = 20;

    $scope.paginate = function(pageNumber) {
      return (pageNumber - 1) * $scope.pageSize;
    };

    $scope.search = '';

    $scope.fetchEvents = function(page, perPage, searchTerm) {
      if (isNaN(page) || page === undefined) {
        page = 0;
      }
      Event.fetchAll(page, perPage, searchTerm).then(function(data){
        $scope.processData(data);
      });
    };

    $scope.processData = function(data) {
      $scope.events = data.results;
      $scope.loadComplete = true;
      $scope.pager = new Pager({
        limit: data.limit,
        total: data.total,
        offset: data.offset
      });
      $scope.noResults = data.total === 0;
    };

    $scope.searchEvents = function(searchTerm) {
      $scope.fetchEvents(0, $scope.pageSize, searchTerm);
    };

    $scope.fetchEvents(
      $scope.paginate($route.current.params.page),
      $scope.pageSize
    );

  }
]);
