"use strict";
class Solution {
  isPrime(N) {
    // code here
    let count = 0,
      flag = false;
    if (N > 1) {
      for (let i = 2; i < N; i++) {
        if (N % i == 0) {
          flag = true;
          break;
        }
      }
      if (flag) return "No";
      else return "Yes";
    }
    return;
  }
}

const prime = new Solution();
console.log(prime.isPrime(10));

console.log(prime.isPrime(32));
