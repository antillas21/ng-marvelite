'use strict';

describe('Controller: CharacterCtrl', function () {

  // load the controller's module
  beforeEach(module('ngMarveliteApp'));

  var CharacterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CharacterCtrl = $controller('CharacterCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
