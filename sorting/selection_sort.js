function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallest]) {
        smallest = j;
      }
    }

    let temp = array[i]
    array[i] = array[smallest]
    array[smallest] = temp 

  }

  return array
}

console.log(selectionSort([90, 29, 32, 12, 10, 4, 3, 6, 8, 10]));
console.log(selectionSort([870, 290, 132, 120, 105, 42, 38, 6, 8, 10]));

/*
Time complexity: 0(n^2)
space complexity: 0(1)
*/
