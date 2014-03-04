'use strict';

describe('Controller: SeriesComicsCtrl', function () {

  // load the controller's module
  beforeEach(module('ngMarveliteApp'));

  var SeriesComicsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SeriesComicsCtrl = $controller('SeriesComicsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
