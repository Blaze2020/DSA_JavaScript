/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let countChar = new Map();
  let windowStart = 0;
  let result = 0;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    countChar.set(s[windowEnd], (countChar.get(s[windowEnd]) || 0) + 1);
    let maxCount = Math.max(...countChar.values());
    let windowLength = windowEnd - windowStart + 1;
    if (windowLength - maxCount > k) {
      countChar.set(s[windowStart], countChar.get(s[windowStart]) - 1);
      windowStart++;
    }
    result = Math.max(result || 0, windowEnd - windowStart + 1);
  }

  return result;
};
