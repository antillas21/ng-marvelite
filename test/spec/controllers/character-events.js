'use strict';

describe('Controller: CharacterEventsCtrl', function () {

  // load the controller's module
  beforeEach(module('ngMarveliteApp'));

  var CharacterEventsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CharacterEventsCtrl = $controller('CharacterEventsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
