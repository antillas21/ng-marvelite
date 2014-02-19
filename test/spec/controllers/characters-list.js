'use strict';

describe('Controller: CharactersListCtrl', function () {

  // load the controller's module
  beforeEach(module('ngMarveliteApp'));

  var CharactersListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CharactersListCtrl = $controller('CharactersListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
