'use strict';

describe('Service: characterEvents', function () {

  // load the service's module
  beforeEach(module('ngMarveliteApp'));

  // instantiate service
  var characterEvents;
  beforeEach(inject(function(_characterEvents_) {
    characterEvents = _characterEvents_;
  }));

  it('should do something', function () {
    expect(!!characterEvents).toBe(true);
  });

});
