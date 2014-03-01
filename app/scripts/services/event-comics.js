'use strict';

angular.module('ngMarveliteApp')
  .factory('EventComics', [
    '$resource', '$q', 'apiCredentials',
    function($resource, $q, apiCredentials) {
      var resource = $resource('http://gateway.marvel.com/v1/public/events/:id/comics',
        {
          id: '@id',
          apikey: apiCredentials.key,
          ts: apiCredentials.ts,
          hash: apiCredentials.hashString()
        },
        {
          fetch: { method: 'GET', isArray: false }
        });
    // Public API here
      return {
        fetchAll: function(id, offset, limit) {
          var deferred = $q.defer();
          resource.get({id: id, offset: offset, limit: limit},
            function(response) {
              deferred.resolve(response.data);
            },
            function(response) {
              deferred.reject(response);
            }
          );
          return deferred.promise;
        }
      };
    }
  ]);
