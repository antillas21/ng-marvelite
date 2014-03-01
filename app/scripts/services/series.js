'use strict';

angular.module('ngMarveliteApp')
  .factory('Series',
    ['$resource', '$q', 'apiCredentials',
    function($resource, $q, apiCredentials) {
      var resource = $resource('http://gateway.marvel.com/v1/public/series/:id',
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
        fetchAll: function(offset, limit, searchTerm) {
          var deferred = $q.defer();
          resource.fetch({offset: offset, limit: limit, title: searchTerm},
            function(response) {
              deferred.resolve(response.data);
            },
            function(response, status) {
              deferred.reject(status);
            });
          return deferred.promise;
        },
        fetch: function(id) {
          var deferred = $q.defer();
          resource.get({id: id},
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
