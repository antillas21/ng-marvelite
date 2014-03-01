'use strict';

describe('Controller: SeriesListCtrl', function () {

  // load the controller's module
  beforeEach(module('ngMarveliteApp'));

  var SeriesListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SeriesListCtrl = $controller('SeriesListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
