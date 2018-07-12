var parensChecker = require('../solutions/mph.js');
var assert = require('assert');

describe('Parentheses Checker', function() {

  it('should check if all parens are closed', function() {
    assert(parensChecker("()(((())))") === true);
    assert(parensChecker("())))(") === false);
    assert(parensChecker(")(") === false);
  });

});
