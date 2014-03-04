'use strict';

describe('Controller: EventSeriesCtrl', function () {

  // load the controller's module
  beforeEach(module('ngMarveliteApp'));

  var EventSeriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventSeriesCtrl = $controller('EventSeriesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
