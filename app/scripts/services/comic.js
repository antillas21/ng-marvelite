'use strict';

angular.module('ngMarveliteApp')
.factory('Comic', ['$resource', '$q', 'apiCredentials', function($resource, $q, apiCredentials) {
  var resource = $resource('http://gateway.marvel.com/v1/public/comics/:id', {
    id: '@id',
    apikey: apiCredentials.key,
    ts: apiCredentials.ts,
    hash: apiCredentials.hashString()
  },
  {
    list: { method: 'GET', isArray: false }
  });

  return {
    fetchAll: function(offset, qty, format, type, dateRange) {
      var deferred = $q.defer();
      resource.list({ offset: offset, limit: qty, format: format, formatType: type, dateDescriptor: dateRange },
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
        function(response) {
          deferred.reject(response);
        });
      return deferred.promise;
    }
  };
}]);
