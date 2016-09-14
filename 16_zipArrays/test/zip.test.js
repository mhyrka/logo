var assert = require('assert');
var zip = require('../solutions/your_file.js');

describe('Zip Arrays', function () {
  it('takes two arrays of the same length and zips them together', function () {
    var a1 = [1,2,3];
    var a2 = [4,5,6];
    assert.deepEqual(zip(a1, a2), [1,4,2,5,3,6])
  })
  // Think of another "what if" for your zip function
  // write a test for this scenario and make it pass
})
