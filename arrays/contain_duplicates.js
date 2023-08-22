// checking if the array contains duplicates using Set Data Structure, it is a common DS, which is mainly used for uniqueness check

/*
Note:
if the size of the Set is less than the size of Array, it contains duplicates.

How? 
because if the array contains duplicates, [1,1,2,3,4,5], if we convert it to a Set {1,2,3,4,5}, where is the extra 1 here? it is excluded by Set, now the size of the Set is less than the size of array, it means there were duplicate elements.

*/

function containDuplicates(arr) {
  //it does not include duplicates
  let mySet = new Set(arr);

  // input-1:
  //   5 < 6 ? true

  //input-2
  // 5 < 5 ? false

  // input-3
  //  4 < 5 ? true
  return mySet.size < arr.length;
}

console.log(containDuplicates([1, 1, 2, 3, 4, 5]));
console.log(containDuplicates([1, 2, 3, 4, 5]));
console.log(containDuplicates([10, 11, 12, 12, 13]));


// Time Compelexity: 0(n)

// why? 
// because to store array inside Set, The Set has to traverse through each element to store it!