'use strict';

angular.module('ngMarveliteApp')
  .directive('resourceImage', [function () {
    return {
      template: '<img ng-src="{{thumbnail.path}}/{{variant}}.{{thumbnail.extension}}" alt="thumbnail">',
      restrict: 'E',
      replace: true,
      scope: {
        thumbnail: '=thumbnail',
        variant: '@variant'
      }
    };
  }]);
