'use strict';

angular.module('ngMarveliteApp')
  .directive('comicItem', [function () {
    return {
      templateUrl: '/views/directives/comic-item.html',
      restrict: 'E',
      replace: true,
      scope: {
        comic: '='
      }
    };
  }]);
