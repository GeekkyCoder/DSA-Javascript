// When to you insertion sort: 
// best suited with almost sorted data znd have few items!!!

function insertionSort(array) {
  let len = array.length,
    i,
    j;

  for (i = 0; i < len; i++) {
    let value = array[i];

    for (j = i - 1; j > -1 && array[j] > value; j--) {
      array[j + 1] = array[j];
    }

    array[j + 1] = value;
  }

  return array;
}

console.log(insertionSort([10, 9, 2, 3, 5, 7, 4, 6]));

//sorted
// 2 3 4 5 6 7 9 10

/*
Time complexity: 0(n^2)
space complexity: 0(1)
*/


