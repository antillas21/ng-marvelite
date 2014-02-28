'use strict';

describe('Service: apiCredentials', function () {

  // load the service's module
  beforeEach(module('ngMarveliteApp'));

  // instantiate service
  var apiCredentials;
  beforeEach(inject(function(_apiCredentials_) {
    apiCredentials = _apiCredentials_;
  }));

  it('should do something', function () {
    expect(!!apiCredentials).toBe(true);
  });

});
