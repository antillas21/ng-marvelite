'use strict';

describe('Controller: CharacterSeriesListCtrl', function () {

  // load the controller's module
  beforeEach(module('ngMarveliteApp'));

  var CharacterSeriesListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CharacterSeriesListCtrl = $controller('CharacterSeriesListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
