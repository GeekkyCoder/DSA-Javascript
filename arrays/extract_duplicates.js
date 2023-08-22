function extractDuplicates(arr) {
  let map = {};
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = arr[i];
    } else {
      duplicates.push(map[arr[i]]);
    }
  }

  return duplicates;
}

console.log(extractDuplicates([1, 1, 2, 3, 4, 4, 5, 5])); // [ 1, 4, 5 ]
console.log(extractDuplicates([1, 2, 3, 4, 5])); // []

// Timr Complexity: 0(n)
