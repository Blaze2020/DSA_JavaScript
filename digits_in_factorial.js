"use strict";
// Digits In Factorial
// EasyAccuracy: 29.7%Submissions: 100K+Points: 2
// Given an integer N. Find the number of digits that appear in its factorial.
// Factorial is defined as, factorial(n) = 1*2*3*4……..*N and factorial(0) = 1.

// Example 1:

// Input: N = 5
// Output: 3
// Explanation: Factorial of 5 is 120.
// Number of digits in 120 is 3 (1, 2, and 0)
class Solution {
  digitsInFactorial(N) {
    // code here
    if (N < 0) return 0;
    if (N <= 1) return 1;
    let factorialDigitCount = 0;
    for (let i = 2; i <= N; i++) {
      factorialDigitCount += Math.log10(i);
    }
    return Math.floor(factorialDigitCount) + 1;
  }
}

const fact = new Solution();
console.log(fact.digitsInFactorial(120));
