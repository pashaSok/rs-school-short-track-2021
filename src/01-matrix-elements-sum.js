/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let res = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i === 0 || matrix[i - 1][j] !== 0) {
        res += matrix[i][j];
      }
    }
  }
  return res;
}

module.exports = getMatrixElementsSum;
