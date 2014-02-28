'use strict';

angular.module('ngMarveliteApp')
  .factory('md5', [function() {
    // Public API here
    return window.md5;
  }
]);
