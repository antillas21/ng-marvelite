'use strict';

describe('Service: seriesEvents', function () {

  // load the service's module
  beforeEach(module('ngMarveliteApp'));

  // instantiate service
  var seriesEvents;
  beforeEach(inject(function(_seriesEvents_) {
    seriesEvents = _seriesEvents_;
  }));

  it('should do something', function () {
    expect(!!seriesEvents).toBe(true);
  });

});
