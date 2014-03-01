'use strict';

describe('Service: eventCharacters', function () {

  // load the service's module
  beforeEach(module('ngMarveliteApp'));

  // instantiate service
  var eventCharacters;
  beforeEach(inject(function(_eventCharacters_) {
    eventCharacters = _eventCharacters_;
  }));

  it('should do something', function () {
    expect(!!eventCharacters).toBe(true);
  });

});
