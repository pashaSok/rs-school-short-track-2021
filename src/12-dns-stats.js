/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  const s = domains;
  let k;
  for (let i = 0; i < s.length; i++) {
    k = s[i].split('.').reverse();
    let res = '';
    for (let j = 0; j < k.length; j++) {
      res += `.${k[j]}`;
      if (Object.prototype.hasOwnProperty.call(result, res)) {
        result[res]++;
      } else {
        result[res] = 1;
      }
    }
  }
  return result;
}
module.exports = getDNSStats;
