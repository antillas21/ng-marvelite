'use strict';

angular.module('ngMarveliteApp')
.factory('Character', ['$resource', '$q', 'apiCredentials', function($resource, $q, apiCredentials) {
  var resource = $resource('http://gateway.marvel.com/v1/public/characters/:id', {
    id: '@id',
    apikey: apiCredentials.key,
    ts: apiCredentials.ts,
    hash: apiCredentials.hashString()
  },
  {
    list: { method: 'GET', isArray: false }
  });

  return {
    fetchAll: function(offset, qty, searchTerm) {
      var deferred = $q.defer();
      resource.list({ offset: offset, limit: qty, name: searchTerm }, function(response) {
        deferred.resolve(response.data);
      }, function(response) {
        deferred.reject(response);
      });

      return deferred.promise;
    },
    fetch: function(id) {
      var deferred = $q.defer();
      resource.get({id: id}, function(response) {
        deferred.resolve(response.data);
      }, function(response) {
        deferred.reject(response);
      });

      return deferred.promise;
    }
  };
}]);
