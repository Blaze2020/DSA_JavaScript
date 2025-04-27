// Longest Substring with at most 2 distinct characters
// https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/

function lengthOfLongestSubstringTwoDistinct(s) {
  let left = 0;
  let charCount = {};
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    charCount[s[right]] = (charCount[s[right]] || 0) + 1;

    while (Object.keys(charCount).length > 2) {
      charCount[s[left]]--;
      if (charCount[s[left]] === 0) {
        delete charCount[s[left]];
      }
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

console.log(lengthOfLongestSubstringTwoDistinct("eceba")); // Output: 3 ("ece" or "ba")
console.log(lengthOfLongestSubstringTwoDistinct("ccaabbb")); // Output: 5 ("aabbb" or "ccbbb")
