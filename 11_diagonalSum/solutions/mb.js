function diagonalSum(square) {
  return square.reduce(function (result, sq, i) {
    return result += sq[i];
  }, 0)
}

module.exports = diagonalSum;
