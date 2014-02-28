'use strict';

angular.module('ngMarveliteApp')
  .directive('resourceImage', [function () {
    return {
      template: '<a href="/#/{{objectType}}/{{objectId}}"><img ng-src="{{thumbnail.path}}/{{variant}}.{{thumbnail.extension}}" alt="thumbnail"></a>',
      restrict: 'E',
      replace: true,
      scope: {
        thumbnail: '=thumbnail',
        variant: '@variant',
        objectType: '@',
        objectId: '@'
      }
    };
  }]);
