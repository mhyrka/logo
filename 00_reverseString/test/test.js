var reverse = require('../reverse')
var assert = require('assert')

describe('Reverse a String', () => {

  it('should reverse a string', function() {
    assert(reverse('programmer') === 'remmargorp');
    assert(reverse('Does this work?') === '?krow siht seoD');
  });

});
