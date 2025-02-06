//leetcode.com/problems/koko-eating-bananas/description/
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

// Example 1:

// Input: piles = [3,6,7,11], h = 8
// Output: 4
// Example 2:

// Input: piles = [30,11,23,4,20], h = 5
// Output: 30
// Example 3:

const minEatingSpeed = function (piles, h) {
  // todo determine min value k based upon piles [3,6,7,11] from {1 to max in piles}
  let left = 1,
    right = Math.max(...piles);
  let result = right;
  while (left <= right) {
    k = Math.ceil((left + right) / 2);
    let totalTime = 0;
    for (let pile of piles) {
      // todo calculate the time taken to eat piles based on k
      totalTime += Math.ceil(pile / k);
    }

    if (totalTime <= h) {
      // todo take the min of calulated value
      result = Math.min(result, k);
      // todo to find more min value
      right = k - 1;
    } else {
      // todo to find more max value as time exceeded
      left = k + 1;
    }
  }

  return result;
};
