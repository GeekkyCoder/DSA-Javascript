// find common elements in an array
function findCommon(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return array[i];
      }
    }
  }

  return undefined;
}

// console.log(findCommon([1,2,1,4,5])) //1
// console.log(findCommon([1,2,3,4,5])) //undefined

// time complexity: 0(n^2)
// space complexity : 0(1)

function findCommonBetter(array) {
  let hashmap = {};

  for (let i = 0; i < array.length; i++) {
    if (!hashmap[array[i]]) {
      hashmap[array[i]] = array[i];
    } else {
      return hashmap[array[i]];
    }
  }

  return undefined;
}

console.log(findCommonBetter([1, 2, 0, 6, 5, 4, 6])); //6

// Time Complexity : 0(n)
// Space Complexity: 0(n)