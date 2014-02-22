'use strict';

describe('Directive: objectImage', function () {

  // load the directive's module
  beforeEach(module('ngMarveliteApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<object-image></object-image>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the objectImage directive');
  }));
});
