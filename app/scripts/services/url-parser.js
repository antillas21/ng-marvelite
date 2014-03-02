'use strict';

angular.module('ngMarveliteApp')
  .factory('urlParser', [function() {
    // Public API here
    return {
      extractResourceId: function(str) {
        if (str !== undefined) {
          return str.split('/').pop();
        } else {
          return '';
        }
      }
    };
  }]);
