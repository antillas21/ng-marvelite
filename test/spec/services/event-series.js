'use strict';

describe('Service: eventSeries', function () {

  // load the service's module
  beforeEach(module('ngMarveliteApp'));

  // instantiate service
  var eventSeries;
  beforeEach(inject(function(_eventSeries_) {
    eventSeries = _eventSeries_;
  }));

  it('should do something', function () {
    expect(!!eventSeries).toBe(true);
  });

});
