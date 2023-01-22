// Count Distinct Vowels in String
// BasicAccuracy: 70.14%Submissions: 4K+Points: 1
// Lamp
// Bag Offers from Top Product Companies. Explore Exclusive Problems Now!

// You are given a string s. You need to count the total distinct vowels in the string. The string s contains lowercase letters only.

// Example 1:

// Input:
// geeks

// Output:
// 1
// Example 2:

// Input:
// world

// Output:
// 1
// Your Task:

// You only need to complete the function countVowels() that takes s as parameter and returns the count of distinct vowels in the string.

// Expected Time Complexity: O(|S|).
// Expected Auxiliary Space: O(1).

function countVowels(s) {
  //code here
  //   console.log(s.split(""));
  //   let temp = s.split("");
  //   console.log(temp);
  let stringSet = new Set(s.split(""));
  let count = 0;
  let temp = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < temp.length; i++) {
    if (stringSet.has(temp[i])) {
      count++;
    }
  }
  //   console.log(stringSet);
  return count;
}

console.log(countVowels("agjkhelbhninfsdofsdfuuudaaand"));
