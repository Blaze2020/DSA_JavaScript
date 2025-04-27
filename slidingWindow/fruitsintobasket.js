/**
 * @param {number[]} fruits
 * @return {number}
 */
function totalFruit(fruits) {
  let windowStart = 0;
  let windowMax = 0;
  let fruitMap = new Map();

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    let endFruit = fruits[windowEnd];

    fruitMap.set(endFruit, fruitMap.get(endFruit) + 1 || 1);

    while (fruitMap.size > 2) {
      let startFruit = fruits[windowStart];

      fruitMap.set(startFruit, fruitMap.get(startFruit) - 1);

      if (fruitMap.get(startFruit) === 0) {
        fruitMap.delete(startFruit);
      }
      windowStart++;
    }

    windowMax = Math.max(windowMax, windowEnd - windowStart + 1);
  }

  return windowMax;
}

console.log(totalFruit([1, 2, 1])); // 7
console.log(totalFruit([0, 1, 2, 2]));
console.log(totalFruit([1, 2, 3, 2, 2]));
