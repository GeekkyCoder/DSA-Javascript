/*working of merge sort and when to use it: 

* Merge sort works by dividing the array into sub-arrays, untill each array has one Element, then each     sub-array  is concatinated(merged) in a sorted order


* this is a best algorithm , it uses divided and conquer technique and very fast comapred to other alogorithms like bubble-sort,selection-sort and instertion sort etc with the time complexity of 0(nlogn)!!!

* User merge sort, when a stable sort is needed, a stable sort is one that's gurranteed not to reorder elements with identical keys.

* disadvantege of merge sort is it has 0(n) space complexity.

* when you care more about the space complexity, then use quick sort rather than merge sort, quick sort has
in memory space or space complexity is 0(logn), whehereas 0(n) for merge sort!
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
