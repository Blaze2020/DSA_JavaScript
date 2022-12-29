// todo : Factorial Trailing Zeroes
// Given an integer n, return the number of trailing zeroes in n!.

// Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

// Example 1:

// Input: n = 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.
// Example 2:

// Input: n = 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.
// Example 3:

// Input: n = 0
// Output: 0

// Constraints:

// 0 <= n <= 104
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let result = 0;
  let k = 5;
  while (k <= n) {
    result += Math.floor(n / k);
    k *= 5;
  }

  return result;
};

// Link :https://www.youtube.com/watch?v=wkvVdggCSeo&ab_channel=SCALER
