/*
it is never going to be used, this algorithm is just for educational purposes!
*/

function bubbleSort(array) {
  // implementation
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

console.log(bubbleSort([10, 2, 9, 5, 3, 4, 0]));
console.log(bubbleSort([6, 1, 2, 3, 4, 5]));
console.log(bubbleSort([6, 1, 2, 3, 4, 5,-2,-3,-4]));

/*
Time complexity: 0(n^2)
space complexity: 0(1)
*/