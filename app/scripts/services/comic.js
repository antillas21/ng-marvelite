'use strict';

angular.module('ngMarveliteApp')
.factory('Comic', ['$resource', '$q', function($resource, $q) {
  var resource = $resource('http://gateway.marvel.com/v1/public/comics/:id', {
    id: '@id',
    apikey: '85ec0830b5958f4f46ea2fa898a76ef2',
    ts: '1',
    hash: '0611e21b1c465d3ba5fe1031fc3f65a0'
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
