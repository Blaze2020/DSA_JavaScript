// todo : https://www.youtube.com/watch?v=cRBSOz49fQk

function threeSum(arr) {
  let set = new Set();
  if (arr === null || arr.length < 3) return [];

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      if (sum === 0) {
        set.add(JSON.stringify([arr[i], arr[left], arr[right]]));
        //to skip the duplicate values
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return Array.from(set).map(JSON.parse);
}

function threeSumPrefixPattern(nums) {
  const map = new Map();
  let x = nums[0],
    y,
    z;
  const results = [];
  for (let i = 1; i <= nums.length; i++) {
    const diff = (x + nums[i]) * -1;
    if (map.has(diff)) {
      results.push([x, diff, nums[i]]);
      map.delete(diff);
    } else map.set(nums[i], i);
  }
  return results;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1, -1, 2], [-1, 0, 1]]

console.log(threeSum([0, 0, 0, 0])); // Output: [[0, 0, 0]]

console.log(threeSum([])); // Output: []

console.log(threeSum([1])); // Output: []

console.log(threeSum([-1, 0, 1, 2, -1, -4, 5, 2])); // Output: [[-1, -1, 2], [-1, 0, 1], [2, 2, 2]]

console.log(threeSum([-1, 0, 1, 2, -1, -4, 5, 2, 3, 6, 7, 8, 9, 10])); // Output: [[-1, -1, 2], [-1, 0, 1], [2, 2, 2], [3, 3, 3]]

console.log(threeSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: []
