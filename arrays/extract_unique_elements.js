function extractUniqueElements(arr1, arr2) {
  return new Set(arr1.concat(arr2));
}

console.log(extractUniqueElements([1, 1, 2, 3, 4, 5], [2, 3, 6, 7, 8, 9])); // {1,2,3,4,5,6,7,8,9}
console.log(
  extractUniqueElements([10, 15, 18, 20, 1, 5], [25, 23, 1, 18, 20, 10])
); // {10,15,18,20,1,5,25,23}

//Time Complexity: 0(n+m)

//why?
// n refers to the length of arr1 and m refers to the length of arr2, the Set has to traverse throughe each arr1 and arr2 to store these values inside it!
