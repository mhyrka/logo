var diagonalSum = require('../solutions/yourfile.js');
var assert = require('assert');

var square4 =

  [[1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1]];

var square5 =

  [[2, 5, 1, 3, 9],
  [4, 1, 3, 0, 8],
  [1, 0, 9, 7, 6],
  [1, 7, 7, 3, 0],
  [3, 3, 8, 2, 4]];

describe('Diagonal Sum', function() {

  it('should check if diagonal sums are accurate', function() {
    assert.equal(diagonalSum(square4), 4);
    assert.equal(diagonalSum(square5), 19);
  });

});
