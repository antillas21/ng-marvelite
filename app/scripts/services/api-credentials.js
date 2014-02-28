'use strict';

angular.module('ngMarveliteApp')
  .factory('apiCredentials', ['md5', function(md5) {
    var privateKey = 'bf23627a4ceea0c962e44411b158d1c745aa53ca';

    return {
      key: '85ec0830b5958f4f46ea2fa898a76ef2',
      ts: function() {
        return Date.now();
      },
      hashString: function() {
        return md5(this.ts() + privateKey + this.key);
      }
    };
  }]);
