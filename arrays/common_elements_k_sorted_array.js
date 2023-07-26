// find common eleements in k sorted array

// k(3) sorted arrays 👇

// [1,2,4,4,5,5,5]
// [3,4,4,5,5]
// [2,1,4,5,5]

// output: [4,5]

// steps 👇
// 1. Iteration over every array!
//* to do this, simply iterate over each array and counts instances of elements, however do not track repeated ones like (5,5,5 should be counted ones in one array iteration)!

// 2.check for repated values
//* to check whether the last value is equal to currentvalue is the same before incrementing, only works in sorted array!

// consider this example below
/*
eg: [1, 2, 3, 3];

let hashmap = {};
let lastValue = null;
for (let value of array) {
  if (value !== lastValue) {
    // 1,2,3
    if (!hashmap[value]) {
      hashmap[value] = 1;
    } else {
      hashmap[value]++;
    }
  }

  lastValue = value
}

// hashmap now
hashmap = {
  1:1,
  2:1,
  3:1
}

*/

//*  After all three arrays has been iterated, iterate through the hashtable properties, if a property value equals to the kArray.length, this means this value was available in all these kArrays!

//Code

function commonElements(kArray) {
  let hashmap = {},
    last,
    answer = [];

  for (var i = 0, kArrayLength = kArray.length; i < kArrayLength; i++) {
    var currentArray = kArray[i];
    last = null;
    for (
      var j = 0, currentArrayLen = currentArray.length;
      j < currentArrayLen;
      j++
    ) {
      var currentElement = currentArray[j];
      if (last != currentElement) {
        if (!hashmap[currentElement]) {
          hashmap[currentElement] = 1;
        } else {
          hashmap[currentElement]++;
        }
      }
      last = currentElement;
    }
  }

  // Iterate through hashmap
  for (var prop in hashmap) {
    if (hashmap[prop] == kArray.length) {
      answer.push(parseInt(prop));
    }
  }
  return answer;
}

console.log(
  commonElements([
    [1, 2, 3],
    [1, 2, 3, 4],
    [1, 2],
  ])
); // [ 1, 2 ]

console.log(
  commonElements([
    [1, 5, 5, 10],
    [3, 4, 5, 5, 10],
    [5, 5, 10, 20],
  ])
); // [ 5, 10 ]

//* Time Compelexity: 0(kn)
//* Space Complexity: 0(n)
