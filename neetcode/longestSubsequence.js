function longestSubsequence(a) {
  // store in set
  let sequence = new Set(a);
  let lgStreak = 0;

  if (a.length === 0) {
    return 0;
  }

  for (let num of a) {
    // if num-1 not in sequence
    if (!sequence.has(num - 1)) {
      let cStreak = 0;

      // try to find longest streak
      while (sequence.has(num + 1)) {
        num++;
        cStreak++;
      }

      lgStreak = Math.max(lgStreak, cStreak);
    }
  }

  return lgStreak + 1;
}

let nums = [100, 4, 200, 1, 3, 2];
console.log(longestSubsequence(nums));
