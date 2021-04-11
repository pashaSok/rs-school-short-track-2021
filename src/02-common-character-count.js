/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function fu(str) {
  const result = {};
  const newStr = str.split('').sort();
  for (let i = 0; i < newStr.length; i++) {
    if (!result[newStr[i]]) {
      result[newStr[i]] = 1;
    } else {
      result[newStr[i]]++;
    }
  }
  return result;
}

function mergeObjects(obj1, obj2) {
  const resultObj = {};
  Object.entries(obj1).forEach((prop) => {
    const key = prop[0];
    const value = prop[1];
    resultObj[key] = value < obj2[key] ? value : obj2[key];
  });
  return resultObj;
}

function getCommonCharacterCount(s1, s2) {
  const s3 = fu(s1);
  const s4 = fu(s2);
  const s = mergeObjects(s3, s4);
  let result = 0;

  Object.keys(s).forEach((key) => {
    if (s[key] === undefined) {
      delete s[key];
    }
  });
  Object.keys(s).forEach((key) => {
    result += s[key];
  });
  return result;
}

module.exports = getCommonCharacterCount;
