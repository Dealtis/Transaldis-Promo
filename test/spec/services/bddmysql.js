'use strict';

describe('Service: bddmysql', function () {

  // load the service's module
  beforeEach(module('transaldisSitePromoApp'));

  // instantiate service
  var bddmysql;
  beforeEach(inject(function (_bddmysql_) {
    bddmysql = _bddmysql_;
  }));

  it('should do something', function () {
    expect(!!bddmysql).toBe(true);
  });

});
