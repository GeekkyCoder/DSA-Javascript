// swap alternate

//input
// [1, 2, 3, 4, 5]
//   //output
//   [2, 1, 4, 3, 5]
// 

//steps:
// swap 1 with 2
// swap 3 with 4
// leave  as it is

function swapAlternate(array) {
  for (let i = 0; i < array.length - 1; i += 2) {
    let temp = array[i];
    array[i] = array[i + 1];
    array[i + 1] = temp;
  }

  return array
}

console.log(swapAlternate([1, 2, 3, 4, 5])); // [ 2, 1, 4, 3, 5 ]
console.log(swapAlternate([8, 9, 1, 2, 55,77])); // [ 9, 8, 2, 1, 77, 55 ]


// time complexity : 0(n)
// space complexity: 0(1)
