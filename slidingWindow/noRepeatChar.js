//todo https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
// todo: T[O(n)] and S[O(K)] K- alphabets (can be O(1) too)
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let windowStart = 0;
  let charCount = new Set();

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    // traverse from left ot right and add the char to the set, if it is not present in the set, then yoo
    // can add it or if present then remove it, this is to find the logest substring with no repeating char

    while (charCount.has(s[windowEnd])) {
      charCount.delete(s[windowStart]);
      windowStart++;
    }

    //   if  not presemt in set then add it
    charCount.add(s[windowEnd]);
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
