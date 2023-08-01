/*working of merge sort: 

Merge sort works by dividing the array into sub-arrays, untill each array has one Element, then each sub-array is concatinated(merged) in a sorted order

*/



function mergeSort(array) {
  // base case: array is now sorted sinnce its just 1 element
  if (array.length < 2) {
    return array;
  }

  let midPoint = Math.floor(array.length / 2);
  // [6,1,23]
  // [6,1] [23]
  // 1 6 23
  let leftArray = array.slice(0, midPoint);
  // [4,2,3]
  //[4,2] [3]
  // 4 2 3
  let rightArray = array.slice(midPoint);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftA, rightA) {
  let results = [],
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < leftA.length && rightIndex < rightA.length) {
    if (leftA[leftIndex] < rightA[rightIndex]) {
      results.push(leftA[leftIndex++]);
    } else {
      results.push(rightA[rightIndex++]);
    }
  }

  let leftRemains = leftA.slice(leftIndex);
  let rightRemains = rightA.slice(rightIndex);

  //adding remaining elements to resultant array
  return results.concat(leftRemains).concat(rightRemains);
}

console.log(mergeSort([6, 1, 23, 4, 2, 3])); // [1,2,3,4,6,23]


/*
Time complexity: 0(nlogn)
space complexity: 0(n)
*/