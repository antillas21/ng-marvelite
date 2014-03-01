'use strict';

angular.module('ngMarveliteApp')
  .factory('urlParser', [function() {
    // Public API here
    return {
      extractResourceId: function(str) {
        return str.split('/').pop();
      }
    };
  }]);
