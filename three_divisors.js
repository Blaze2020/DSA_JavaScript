// "use strict";
// Given a positive integer value N. The task is to find how many numbers less than or equal to N have numbers of divisors exactly equal to 3.

// Example 1:

// Input:
// N = 6
// Output: 1
// Explanation: The only number less than 6 with
// 3 divisors is 4.
// Example 2:

// Input:
// N = 10
// Output: 2
// Explanation: 4 and 9 have 3 divisors.

class Solution {
  exactly3Divisors(N) {
    // code here
    let count = 0;
    for (let i = 2; i * i <= N; i++) {
      console.log(this);
      if (this.isPrime(i)) {
        if (i * i <= N) {
          count++;
        }
      }
    }
    return count;
  }

  isPrime(n) {
    if (n == 0 || n == 1) {
      return false;
    }
    for (let i = 2; i * i <= n; i++) {
      if (n % i == 0) return false;
    }
    return true;
  }
}

console.log(new Solution().exactly3Divisors(49));
