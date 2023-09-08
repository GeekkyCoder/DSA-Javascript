// Given an array of strings, return another array containing all of its longest strings.

// input : ["aba", "aa", "ad", "vcd", "aba"]
// output : ["aba", "vcd", "aba"]

function findLongestStrings(inputArray) {
  let longestStrings = [];

  // find the maxlength
  let maxLength = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > maxLength) {
      maxLength = inputArray[i].length;
    }
  }

  // collecting all the longest strings
  for (let j = 0; j < inputArray.length; j++) {
    if (inputArray[j].length === maxLength) {
      longestStrings.push(inputArray[j]);
    }
  }

  return longestStrings;
}

console.log(findLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(findLongestStrings(["abc", "eeee", "abcd", "dcd"]));


// time Complexity: 0(n)
// space compplexity: 0(1)
