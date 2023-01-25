"use strict";

// Given two strings a and b consisting of lowercase characters. The task is to check whether two given strings are an anagram of each other or not. An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, act and tac are an anagram of each other.

// Note :- If the strings are anagrams you have to return True or else return False

// Example 1:

// Input:a = geeksforgeeks, b = forgeeksgeeks
// Output: YES
// Explanation: Both the string have same characters with
//         same frequency. So, both are anagrams.
// Example 2:

// Input:a = allergy, b = allergic
// Output: NO
// Explanation: Characters in both the strings are
//         not same, so they are not anagrams.

function isAnagram(a, b) {
  // code here
  if (a.length != b.length) {
    return false;
  }
  let isAna = new Map();

  //   using hashing to find out the count's
  for (let i = 0; i < a.length; i++) {
    if (isAna.has(a[i])) {
      isAna.set(a[i], isAna.get(a[i]) + 1);
    } else {
      isAna.set(a[i], 1);
    }
  }

  for (let i = 0; i < b.length; i++) {
    if (isAna.has(b[i])) {
      isAna.set(a[i], isAna.get(a[i]) - 1);
    } else {
      return false;
    }
  }

  //   to verify the count
  for (let keys of isAna.keys()) {
    if (isAna.get(keys) != 0) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram("geeksforgeeks", "forgeeksgeeks"));

console.log(isAnagram("allergy", "allergic"));
