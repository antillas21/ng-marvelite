'use strict';

describe('Service: Pager', function () {

  // load the service's module
  beforeEach(module('ngMarveliteApp'));

  // instantiate service
  var Pager;
  beforeEach(inject(function(_Pager_) {
    Pager = _Pager_;
  }));

  it('should do something', function () {
    expect(!!Pager).toBe(true);
  });

});
