function findCommonCharsBetweenTwoStrs(s1, s2) {
  const charCount = {};

  // Count characters in s2
  for (const char of s2) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  let count = 0;

  // Iterate through s1 and count common characters
  for (const char of s1) {
    if (charCount[char] && charCount[char] > 0) {
      count++;
      // Decrementing the count to avoid double-counting
      charCount[char]--;
    }
  }

  return count;
}

console.log(findCommonCharsBetweenTwoStrs("aabcc", "adcaa")); // 3
console.log(findCommonCharsBetweenTwoStrs("zzzz", "zzzzzzz")); // 4

// time complexity : 0(n)
// space complexity : 0(n)
