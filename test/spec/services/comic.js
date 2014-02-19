'use strict';

describe('Service: comic', function () {

  // load the service's module
  beforeEach(module('ngMarveliteApp'));

  // instantiate service
  var comic;
  beforeEach(inject(function(_comic_) {
    comic = _comic_;
  }));

  it('should do something', function () {
    expect(!!comic).toBe(true);
  });

});
