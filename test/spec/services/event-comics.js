'use strict';

describe('Service: eventComics', function () {

  // load the service's module
  beforeEach(module('ngMarveliteApp'));

  // instantiate service
  var eventComics;
  beforeEach(inject(function(_eventComics_) {
    eventComics = _eventComics_;
  }));

  it('should do something', function () {
    expect(!!eventComics).toBe(true);
  });

});
