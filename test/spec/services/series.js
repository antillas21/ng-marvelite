'use strict';

describe('Service: Series', function () {

  // load the service's module
  beforeEach(module('ngMarveliteApp'));

  // instantiate service
  var Series;
  beforeEach(inject(function(_Series_) {
    Series = _Series_;
  }));

  it('should do something', function () {
    expect(!!Series).toBe(true);
  });

});
