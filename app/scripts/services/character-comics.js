'use strict';

angular.module('ngMarveliteApp')
  .factory('CharacterComics',
    ['$resource', '$q', function($resource, $q) {
      var resource = $resource('http://gateway.marvel.com/v1/public/characters/:id/comics', {
        id: '@id',
        apikey: '85ec0830b5958f4f46ea2fa898a76ef2',
        ts: '1',
        hash: '0611e21b1c465d3ba5fe1031fc3f65a0'
      },
      {
        fetch: { method: 'GET', isArray: false }
      });

      return {
        fetchAll: function(id, offset, limit) {
          var deferred = $q.defer();
          resource.get({id: id, offset: offset, limit: limit},
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
