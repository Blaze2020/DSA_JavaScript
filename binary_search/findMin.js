/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1;
  let result = nums[0];
  while (left <= right) {
    // todo check if left element is less than right element
    if (nums[left] < nums[right]) {
      result = Math.min(result, nums[left]);
      break;
    }
    // todo find the mid element
    let mid = Math.ceil((left + right) / 2);
    result = Math.min(result, nums[mid]);
    //   todo if mid is greator then left then increment to right
    if (nums[mid] >= nums[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};
