'use strict';

describe('Controller: ComicsListCtrl', function () {

  // load the controller's module
  beforeEach(module('ngMarveliteApp'));

  var ComicsListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ComicsListCtrl = $controller('ComicsListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
