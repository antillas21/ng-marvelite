'use strict';

angular.module('ngMarveliteApp')
  .factory('EventSeries', [
    '$resource', '$q', 'apiCredentials',
    function($resource, $q, apiCredentials) {
      var resource = $resource('http://gateway.marvel.com/v1/public/events/:id/series',
        {
          id: '@id',
          apikey: apiCredentials.key,
          ts: apiCredentials.ts,
          hash: apiCredentials.hashString()
        });
      // Public API here
      return {
        fetch: function(id, offset, limit) {
          var deferred = $q.defer();
          resource.get({id: id, offset: offset, limit: limit},
            function(response) {
              deferred.resolve(response.data);
            },
            function(response, status) {
              deferred.reject(status);
            });
          return deferred.promise;
        }
      };
    }
  ]);
