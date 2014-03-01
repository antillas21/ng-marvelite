'use strict';

angular.module('ngMarveliteApp')
  .directive('seriesItem', [function () {
    return {
      templateUrl: '/views/directives/series-item.html',
      restrict: 'E',
      replace: true,
      scope: {
        series: '='
      }
    };
  }]);
