'use strict';

describe('Service: seriesComics', function () {

  // load the service's module
  beforeEach(module('ngMarveliteApp'));

  // instantiate service
  var seriesComics;
  beforeEach(inject(function(_seriesComics_) {
    seriesComics = _seriesComics_;
  }));

  it('should do something', function () {
    expect(!!seriesComics).toBe(true);
  });

});
