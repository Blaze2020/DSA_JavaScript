/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// todo T(n) : O(log(m)+log(n))

var searchMatrix = function (matrix, target) {
  //todo Traversing throuhg rows to find the row in which element exists
  let ROWS = matrix.length,
    COLS = matrix[0].length;
  let top = 0,
    bottom = ROWS - 1;

  while (top <= bottom) {
    let row = Math.floor((top + bottom) / 2);
    if (target < matrix[row][0]) {
      bottom = row - 1;
    } else if (target > matrix[row][COLS - 1]) {
      top = row + 1;
    }
    // todo to fix the top and bottom values or to track these values(to find target in those)
    else {
      break;
    }
  }

  // todo to see if top does not exceed bottom it means the element dosen't exist
  if (top > bottom) {
    return false;
  }

  //todo to find the exact row in which the value exists
  let row = Math.floor((top + bottom) / 2);
  //todo to find the element in the row
  let low = 0,
    high = COLS - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (target < matrix[row][mid]) {
      high = mid - 1;
    } else if (target > matrix[row][mid]) {
      low = mid + 1;
    } else {
      return true;
    }
  }
  return false;
};
