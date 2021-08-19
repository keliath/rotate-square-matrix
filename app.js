const matrix = [
  [0, 1, 6],
  [2, 3, 7],
  [4, 5, 8],
];
const n = matrix.length;

// [
//   [4, 2, 0],
//   [5, 3, 1],
//   [8, 7, 6],
// ];

let matrixTranspose = (matrix) => {
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  return matrix;
};

let swap = (matrix) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - 1 - j];
      matrix[i][n - 1 - j] = temp;
    }
  }
  return matrix;
};

let rotate = (matrix) => {
  return swap(matrixTranspose(matrix));
};

console.log(rotate(matrix));
