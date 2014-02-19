'use strict';

describe('Controller: ComicCtrl', function () {

  // load the controller's module
  beforeEach(module('ngMarveliteApp'));

  var ComicCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ComicCtrl = $controller('ComicCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
