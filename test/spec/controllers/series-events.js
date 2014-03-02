'use strict';

describe('Controller: SeriesEventsCtrl', function () {

  // load the controller's module
  beforeEach(module('ngMarveliteApp'));

  var SeriesEventsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SeriesEventsCtrl = $controller('SeriesEventsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
