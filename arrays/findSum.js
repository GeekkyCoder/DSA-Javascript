// Find two array elememts in an array that adds upto a number and return the indices


// first solution 

function findSum(array, weight) {
  if (!array.length) {
    return [];
  }

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === weight) {
        return `${i} ${j}`;
      }
    }
  }

  return undefined;
}

console.log(findSum([1, 2, 3, 4, 5], 0));
console.log(findSum([1, 2, 3, 4, 5], 9));
console.log(findSum([1, 200, 300, 400, 500, 1000, 1200], 1500));

// time complexity : 0(n^2)
// space complexity: 0(1)


// second solution 

function findSumBetter(array, weight) {
  let hashmap = {};

  for (let i = 0; i < array.length; i++) {
    if (!hashmap[i]) {
      hashmap[i] = array[i];
    }
  }

  for (let j = 0; j < array.length; j++) {
    if (hashmap[j] + array[j + 1] === weight) {
      return `${j} ${j+1}`;
    }
  }

  return undefined;
}

console.log(findSumBetter([1, 2, 3, 4, 5], 9));
console.log(findSumBetter([1, 2, 3, 4, 5], 3));
console.log(findSumBetter([1, 200, 300, 400, 500, 1000, 1200], 1500));

// time complexity: 0(n)
// space complexity: 0(n)

// space complexity is 0(n), because we stored the elements in hashmap in iteration 


// [1,2,3,4,5] 9 -> 3,4
function findSumBetter2(array,weight){
    let hashmap = {}

    for(let i=0 ; i <array.length; i++){
        let currentElement = array[i]
        let difference = weight - currentElement

        if(hashmap[currentElement] != undefined){
            return `${i} ${hashmap[currentElement]}`
        }else {
            // store index 
            hashmap[difference] = i
        }
     }

     return undefined
}


console.log(findSumBetter2([1,2,3,4,5],9)) // 4 3
console.log(findSumBetter2([1, 200, 300, 400, 500, 1000, 1200], 1500)); // 5 4

// time complexity : 0(n)
// space complexity : 0(n)