'use strict';

describe('Controller: CharacterComicsCtrl', function () {

  // load the controller's module
  beforeEach(module('ngMarveliteApp'));

  var CharacterComicsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CharacterComicsCtrl = $controller('CharacterComicsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
