// todo: https://www.youtube.com/watch?v=UuiTKBwPgAo
//leetcode.com/problems/container-with-most-water/description/

https: var maxArea = function (height) {
  let maxArea = 0;
  let left = 0,
    right = height.length - 1;

  while (left < right) {
    let currentArea = (right - left) * Math.min(height[left], height[right]); //mikn required to check the water is not spilled
    maxArea = Math.max(maxArea, currentArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
