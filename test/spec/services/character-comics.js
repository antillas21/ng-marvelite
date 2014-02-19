'use strict';

describe('Service: characterComics', function () {

  // load the service's module
  beforeEach(module('ngMarveliteApp'));

  // instantiate service
  var characterComics;
  beforeEach(inject(function(_characterComics_) {
    characterComics = _characterComics_;
  }));

  it('should do something', function () {
    expect(!!characterComics).toBe(true);
  });

});
