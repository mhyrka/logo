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


function diagonalSum(matrix) {
    return matrix.reduce((accumulator, iterator, i) => accumulator + iterator[i], 0);
}


console.log(diagonalSum(square5));
