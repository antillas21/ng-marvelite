'use strict';

describe('Controller: EventsListCtrl', function () {

  // load the controller's module
  beforeEach(module('ngMarveliteApp'));

  var EventsListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventsListCtrl = $controller('EventsListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
