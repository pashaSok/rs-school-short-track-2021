/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let left = 0;
  let right = array.length - 1;
  let res = -1;
  let find = false;
  let middle;
  while (find === false && left <= right) {
    middle = Math.floor((right + left) / 2);
    if (array[middle] === value) {
      find = true;
      res = middle;
    } else if (array[middle] > value) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return res;
}

module.exports = findIndex;
