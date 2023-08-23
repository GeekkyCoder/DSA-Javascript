//Given an sorted array Find and element within an array that appears only once, each element appears twice but there will always be 1 element that appears only once

// input: [1,1,3,3,4,5,5,7,7,8,8]

// output: 4

function findOnlyOnce(arr) {
  arr.sort();

  let map = {};

  // 0(n)
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = 1;
    } else {
      map[arr[i]]++;
    }
  }

  // { '1': 2, '3': 2, '4': 1, '5': 2, '7': 2, '8': 2 }

  //0(n)
  for (let key of Object.keys(map)) {
    if (map[key] === 1) {
      return key;
    }
  }
}

console.log(findOnlyOnce([1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8])); //4 
console.log(findOnlyOnce([1, 1, 3, 3, 4,4, 5, 5, 7, 7, 8])); //8


// Time complexity: 0(n)
// Space Complexity: 0(n)
