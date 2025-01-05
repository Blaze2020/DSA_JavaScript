const numbers = [2, 7, 11, 15],
  target = 9;

function twoSum(a, target) {
  let i = 0,
    j = a.length - 1;
  while (i < j) {
    let sum = a[i] + a[j];
    if (sum == target) {
      return [i + 1, j + 1];
    } else if (sum < target) {
      i++;
    } else {
      j--;
    }
  }
}
console.log(twoSum(numbers, target));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));
