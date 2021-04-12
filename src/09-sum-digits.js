/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let temp = n;
  while (temp > 9) {
    let res = 0;
    temp = temp.toString().split('');
    for (let i = 0; i < temp.length; i++) {
      res += Number(temp[i]);
    }
    temp = res;
  }
  return temp;
}

module.exports = getSumOfDigits;
