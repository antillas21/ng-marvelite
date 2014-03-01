'use strict';

angular.module('ngMarveliteApp')
  .directive('eventItem', [function () {
    return {
      templateUrl: '/views/directives/event-item.html',
      restrict: 'E',
      replace: true,
      scope: {
        event: '='
      }
    };
  }]);
