// todo : https://leetcode.com/problems/max-consecutive-ones-iii/

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let result = 0;
  let windowStart = 0;
  let countOnes = 0;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    //to keep track of the number of 1s in the current window
    // if we encounter a 1, we increment the countOnes
    // if we encounter a 0, we do not increment the countOnes
    if (nums[windowEnd] === 1) {
      countOnes++;
    }
    // if the number of 0s in the current window is greater than k, we need to shrink the window from the left
    // we do this by moving the windowStart pointer to the right until the number of 0s in the current window is less than or equal to k
    if (windowEnd - windowStart + 1 - countOnes > k) {
      if (nums[windowStart] === 1) {
        countOnes--;
      }
      // if we encounter a 0, we do not decrement the countOnes
      windowStart++;
    }

    result = Math.max(result, windowEnd - windowStart + 1);
  }
  return result;
};
