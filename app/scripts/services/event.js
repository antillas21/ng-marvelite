'use strict';

angular.module('ngMarveliteApp')
.factory('Event', [
  '$resource', '$q', 'apiCredentials',
  function($resource, $q, apiCredentials) {
    var resource = $resource('http://gateway.marvel.com/v1/public/events/:id',
      {
        id: '@id',
        apikey: apiCredentials.key,
        ts: apiCredentials.ts,
        hash: apiCredentials.hashString()
      },
      {
        list: { method: 'GET', isArray: false }
      });

    // Public API here
    return {
      fetchAll: function(offset, qty, searchTerm) {
        var deferred = $q.defer();
        resource.list({offset: offset, limit: qty, name: searchTerm},
          function(response) {
            deferred.resolve(response.data);
          },
          function(response) {
            deferred.reject(response);
          });
        return deferred.promise;
      },
      fetch: function(id) {
        var deferred = $q.defer();
        resource.get({id: id},
          function(response) {
            deferred.resolve(response.data);
          },
          function(data, status) {
            deferred.reject(status);
          });
        return deferred.promise;
      }
    };
  }
]);
