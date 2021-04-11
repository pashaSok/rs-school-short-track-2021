/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0;
  const s = [];
  let number = n;
  while (number) {
    s.push(number % 10);
    number = Math.floor(number / 10);
  }
  for (let i = 0; i < s.length; i++) {
    let k = 0;
    for (let j = s.length - 1; j >= 0; j--) {
      if (j !== i) {
        k = k * 10 + s[j];
      }
    }
    result = Math.max(k, result);
  }
  return result;
}

module.exports = deleteDigit;
