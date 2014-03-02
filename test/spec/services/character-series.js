'use strict';

describe('Service: characterSeries', function () {

  // load the service's module
  beforeEach(module('ngMarveliteApp'));

  // instantiate service
  var characterSeries;
  beforeEach(inject(function(_characterSeries_) {
    characterSeries = _characterSeries_;
  }));

  it('should do something', function () {
    expect(!!characterSeries).toBe(true);
  });

});
