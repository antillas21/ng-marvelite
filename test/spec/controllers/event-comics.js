'use strict';

describe('Controller: EventComicsCtrl', function () {

  // load the controller's module
  beforeEach(module('ngMarveliteApp'));

  var EventComicsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventComicsCtrl = $controller('EventComicsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
